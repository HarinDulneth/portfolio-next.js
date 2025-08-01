import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
    weight: '400',
    subsets: ['latin'],
  })
  
function SignatureText({ text, fontSize, color, letterSpacing }: { text: string; fontSize?: string; color?: string; letterSpacing?: string }) {
return (
    <p className={inter.className} style={{
    fontFamily: "'Homemade Apple', cursive",
    fontSize: fontSize || '24px',
    color: color || '#333',
    letterSpacing: letterSpacing || '1px',
    lineHeight: '1.5',
    }}>
    {text}
    </p>
);
}

export default SignatureText;
