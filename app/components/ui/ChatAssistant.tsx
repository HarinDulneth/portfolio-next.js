"use client";

import { useState, useEffect, useRef, JSX } from "react";
import { v4 as uuid } from "uuid";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function formatMessage(text: string): JSX.Element {
  // Split into lines and process each
  const lines = text.split("\n");
  const elements: JSX.Element[] = [];

  lines.forEach((line, i) => {
    // Process inline bold: **text** → <strong>
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    const formattedParts = parts.map((part, j) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={j} style={{ color: "#dbb2f8", fontWeight: 600 }}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={j}>{part}</span>;
    });

    // Check if it's a numbered list item (e.g. "1. " or "2. ")
    const listMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (listMatch) {
      elements.push(
        <div key={i} style={{ display: "flex", gap: "6px", marginTop: i > 0 ? "6px" : 0 }}>
          <span style={{ color: "#9b59b6", fontWeight: 600, flexShrink: 0 }}>{listMatch[1]}.</span>
          <span>{formattedParts.slice(1)}</span>
        </div>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={i} style={{ height: "8px" }} />);
    } else {
      elements.push(
        <div key={i} style={{ marginTop: i > 0 && lines[i - 1]?.trim() !== "" ? "2px" : 0 }}>
          {formattedParts}
        </div>
      );
    }
  });

  return <>{elements}</>;
}

interface ChatResponse {
  reply: string;
}

export default function ChatAssistant(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [message, setMessage] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = localStorage.getItem("sid") ?? uuid();
    localStorage.setItem("sid", id);
    setSessionId(id);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [chat]);

  const sendMessage = async (): Promise<void> => {
    if (!message.trim() || loading) return;
    const userMsg = message;
    setMessage("");
    setLoading(true);

    setChat((prev) => [
      ...prev,
      { role: "user", content: userMsg },
      { role: "assistant", content: "" },
    ]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, sessionId }),
      });

      const data: ChatResponse = await res.json();

      setChat((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].content = data.reply;
        return updated;
      });
    } catch {
      setChat((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].content = "Something went wrong. Please try again.";
        return updated;
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#5500AC] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
        style={{
          // background: "linear-gradient(135deg, #7B00E0 0%, #3D0070 100%)",
          // border: "1px solid rgba(219, 178, 248, 0.3)",
          boxShadow: "0 0 24px rgba(123, 0, 224, 0.4), 0 4px 12px rgba(0,0,0,0.5)",
        }}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          /* Close (X) icon */
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F3E5FC" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          /* Chat icon */
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F3E5FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <circle cx="9" cy="10" r="1" fill="#F3E5FC" stroke="none" />
            <circle cx="12" cy="10" r="1" fill="#F3E5FC" stroke="none" />
            <circle cx="15" cy="10" r="1" fill="#F3E5FC" stroke="none" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      <div
        className="fixed bottom-24 right-6 z-50 flex flex-col overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          width: open ? "380px" : "0px",
          height: open ? "480px" : "0px",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          borderRadius: "16px",
          background: "linear-gradient(160deg, rgba(20, 0, 40, 0.97) 0%, rgba(10, 0, 20, 0.98) 100%)",
          border: "1px solid rgba(123, 0, 224, 0.35)",
          boxShadow: "0 0 40px rgba(123, 0, 224, 0.2), 0 8px 32px rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-5 py-4 shrink-0"
          style={{ borderBottom: "1px solid rgba(123, 0, 224, 0.25)" }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #7B00E0, #3D0070)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F3E5FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: "#F3E5FC" }}>AI Assistant</p>
            <p className="text-xs" style={{ color: "rgba(219, 178, 248, 0.5)" }}>Ask me anything about Harin</p>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-4 py-3 space-y-3"
          style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(123,0,224,0.3) transparent" }}
        >
          {chat.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ background: "rgba(123, 0, 224, 0.15)", border: "1px solid rgba(123, 0, 224, 0.3)" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(219,178,248,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <p className="text-sm" style={{ color: "rgba(219, 178, 248, 0.5)" }}>
                Start a conversation...
              </p>
            </div>
          )}

          {chat.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className="max-w-[80%] px-3.5 py-2.5 text-sm leading-relaxed"
                style={
                  m.role === "user"
                    ? {
                        background: "linear-gradient(135deg, #7B00E0, #5500A0)",
                        color: "#F3E5FC",
                        borderRadius: "14px 14px 4px 14px",
                      }
                    : {
                        background: "rgba(255, 255, 255, 0.06)",
                        color: "rgba(243, 229, 252, 0.85)",
                        borderRadius: "14px 14px 14px 4px",
                        border: "1px solid rgba(123, 0, 224, 0.15)",
                      }
                }
              >
                {m.content ? (
                  m.role === "assistant" ? formatMessage(m.content) : m.content
                ) : (
                  <span className="inline-flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div
          className="px-4 py-3 shrink-0"
          style={{ borderTop: "1px solid rgba(123, 0, 224, 0.2)" }}
        >
          <div
            className="flex items-center gap-2 px-3 py-2"
            style={{
              borderRadius: "12px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(123, 0, 224, 0.2)",
            }}
          >
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              disabled={loading}
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-purple-300/30"
              style={{ color: "#F3E5FC" }}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !message.trim()}
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110"
              style={{
                background: message.trim() ? "linear-gradient(135deg, #7B00E0, #3D0070)" : "rgba(123,0,224,0.2)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F3E5FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}