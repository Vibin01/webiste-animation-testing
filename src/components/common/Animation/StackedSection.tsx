"use client";

import {
  Children,
  ReactNode,
} from "react";

type StackedSectionsProps = {
  children: ReactNode;
};

export default function StackedSections({
  children,
}: StackedSectionsProps) {
  const sections = Children.toArray(children);

  return (
    <section className="relative w-full">
      {sections.map((section, index) => (
        <div
          key={index}
          className="sticky top-0 h-screen w-full"
          style={{
            zIndex: index + 1,
          }}
        >
          {section}
        </div>
      ))}
    </section>
  );
}