"use client"

import * as React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"

type LiquidButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
}

const sizeStyles: Record<string, React.CSSProperties> = {
  sm: { height: 38, padding: "0 20px", fontSize: 13, borderRadius: 9999, gap: 6 },
  md: { height: 44, padding: "0 28px", fontSize: 14, borderRadius: 9999, gap: 8 },
  lg: { height: 48, padding: "0 32px", fontSize: 15, borderRadius: 9999, gap: 8 },
  xl: { height: 56, padding: "0 40px", fontSize: 16, borderRadius: 9999, gap: 10 },
}

const BROWN = "rgb(58, 38, 28)"
const CREAM = "rgb(250, 245, 238)"

function LiquidButton({ className, size = "md", children, style, ...props }: LiquidButtonProps) {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)

  const isGlass = hovered || pressed

  return (
    <button
      className={cn("liquid-glass-btn", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false) }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => { setPressed(false); setTimeout(() => setPressed(false), 300) }}
      style={{
        ...sizeStyles[size],
        ...style,
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        border: "none",
        outline: "none",
        fontFamily: "inherit",
        fontWeight: 500,
        whiteSpace: "nowrap",
        WebkitTapHighlightColor: "transparent",
        transform: pressed ? "scale(0.97)" : hovered ? "scale(1.03)" : "scale(1)",
        transition: "transform 300ms cubic-bezier(0.22, 1, 0.36, 1)",
        background: "transparent",
        overflow: "hidden",
      }}
      {...props}
    >
      {/* Solid brown background — default state */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          backgroundColor: BROWN,
          opacity: isGlass ? 0 : 1,
          transition: "opacity 450ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      {/* Glass layer — hover/active state */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          overflow: "hidden",
          backdropFilter: "blur(24px) saturate(1.8)",
          WebkitBackdropFilter: "blur(24px) saturate(1.8)",
          backgroundColor: "rgba(250, 245, 238, 0.3)",
          opacity: isGlass ? 1 : 0,
          transition: "opacity 450ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      {/* Glass edge shadows */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          opacity: isGlass ? 1 : 0,
          transition: "opacity 450ms cubic-bezier(0.22, 1, 0.36, 1)",
          boxShadow: [
            "inset 0 1.5px 0.5px rgba(255,255,255,0.5)",
            "inset 0 -1px 1px rgba(58,38,28,0.08)",
            "inset 1px 1px 3px rgba(255,255,255,0.2)",
            "inset -1px -1px 3px rgba(58,38,28,0.06)",
            "0 0 0 0.5px rgba(58,38,28,0.12)",
            "0 4px 16px rgba(58,38,28,0.06)",
          ].join(", "),
        }}
      />

      {/* Specular highlight */}
      <div
        style={{
          position: "absolute",
          top: 1,
          left: "15%",
          right: "15%",
          height: "45%",
          borderRadius: 9999,
          pointerEvents: "none",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
          opacity: isGlass ? 1 : 0,
          transition: "opacity 450ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      {/* Border ring */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          border: isGlass ? "1px solid rgba(58,38,28,0.15)" : "1px solid transparent",
          transition: "border-color 450ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      {/* Text content — properly centered */}
      <span
        style={{
          position: "relative",
          zIndex: 10,
          display: "inline-flex",
          alignItems: "center",
          gap: "inherit",
          color: isGlass ? BROWN : CREAM,
          transition: "color 450ms cubic-bezier(0.22, 1, 0.36, 1)",
          lineHeight: 1,
        }}
      >
        {children}
      </span>
    </button>
  )
}

export { LiquidButton }
