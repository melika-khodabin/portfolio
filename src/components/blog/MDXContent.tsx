"use client";

import { useMemo } from "react";

interface MDXContentProps {
  content: string;
}

interface ParsedElement {
  type: "h2" | "h3" | "p" | "li" | "blockquote" | "code" | "hr";
  content: string;
  inList?: boolean;
}

function parseMarkdown(content: string): ParsedElement[] {
  const lines = content.split("\n");
  const elements: ParsedElement[] = [];
  let inCodeBlock = false;
  let codeContent = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Handle code blocks
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push({ type: "code", content: codeContent.trim() });
        codeContent = "";
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent += line + "\n";
      continue;
    }

    // Skip empty lines
    if (line.trim() === "") {
      continue;
    }

    // Horizontal rule
    if (line.match(/^---+$/)) {
      elements.push({ type: "hr", content: "" });
      continue;
    }

    // Headings
    if (line.startsWith("## ")) {
      elements.push({ type: "h2", content: line.slice(3) });
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push({ type: "h3", content: line.slice(4) });
      continue;
    }

    // Blockquotes
    if (line.startsWith("> ")) {
      elements.push({ type: "blockquote", content: line.slice(2) });
      continue;
    }

    // List items
    if (line.startsWith("- ") || line.match(/^\d+\. /)) {
      const content = line.startsWith("- ") ? line.slice(2) : line.replace(/^\d+\. /, "");
      elements.push({ type: "li", content });
      continue;
    }

    // Regular paragraphs
    elements.push({ type: "p", content: line });
  }

  return elements;
}

function formatText(text: string): React.ReactNode[] {
  let key = 0;

  // Replace patterns with placeholders, then convert
  const replacements: { placeholder: string; node: React.ReactNode }[] = [];
  let result = text;

  // Handle links first
  result = result.replace(/\[(.+?)\]\((.+?)\)/g, (_, linkText, url) => {
    const placeholder = `__LINK_${replacements.length}__`;
    replacements.push({
      placeholder,
      node: <a key={key++} href={url} className="text-primary underline underline-offset-2 hover:text-primary-focus">{linkText}</a>
    });
    return placeholder;
  });

  // Handle bold
  result = result.replace(/\*\*(.+?)\*\*/g, (_, boldText) => {
    const placeholder = `__BOLD_${replacements.length}__`;
    replacements.push({
      placeholder,
      node: <strong key={key++}>{boldText}</strong>
    });
    return placeholder;
  });

  // Handle italic
  result = result.replace(/\*(.+?)\*/g, (_, italicText) => {
    const placeholder = `__ITALIC_${replacements.length}__`;
    replacements.push({
      placeholder,
      node: <em key={key++}>{italicText}</em>
    });
    return placeholder;
  });

  // Handle inline code
  result = result.replace(/`(.+?)`/g, (_, codeText) => {
    const placeholder = `__CODE_${replacements.length}__`;
    replacements.push({
      placeholder,
      node: <code key={key++} className="bg-base-200 px-1.5 py-0.5 rounded text-sm font-mono">{codeText}</code>
    });
    return placeholder;
  });

  // Now split by placeholders and reassemble
  if (replacements.length === 0) {
    return [text];
  }

  const allPlaceholders = replacements.map(r => r.placeholder);
  const regex = new RegExp(`(${allPlaceholders.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
  const segments = result.split(regex);

  return segments.map((segment) => {
    const replacement = replacements.find(r => r.placeholder === segment);
    if (replacement) {
      return replacement.node;
    }
    return segment || null;
  }).filter(Boolean);
}

export function MDXContent({ content }: MDXContentProps) {
  const elements = useMemo(() => parseMarkdown(content), [content]);

  return (
    <div className="space-y-4">
      {elements.map((element, index) => {
        switch (element.type) {
          case "h2":
            return (
              <h2 key={index} className="font-heading text-2xl mt-8 mb-4">
                {formatText(element.content)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} className="font-heading text-xl mt-6 mb-3">
                {formatText(element.content)}
              </h3>
            );
          case "p":
            return (
              <p key={index} className="leading-relaxed text-base-content">
                {formatText(element.content)}
              </p>
            );
          case "li":
            return (
              <li key={index} className="flex items-start gap-2 ml-4">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" />
                <span>{formatText(element.content)}</span>
              </li>
            );
          case "blockquote":
            return (
              <blockquote
                key={index}
                className="border-l-4 border-secondary pl-4 italic text-base-content/70"
              >
                {formatText(element.content)}
              </blockquote>
            );
          case "code":
            return (
              <pre
                key={index}
                className="bg-neutral text-neutral-content p-4 rounded-lg overflow-x-auto font-mono text-sm"
              >
                <code>{element.content}</code>
              </pre>
            );
          case "hr":
            return <hr key={index} className="border-base-300 my-8" />;
          default:
            return null;
        }
      })}
    </div>
  );
}
