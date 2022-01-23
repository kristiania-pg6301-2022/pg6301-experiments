import * as React from "react";

export function Application({
  greeting,
  someone,
}: {
  greeting: string;
  someone: string;
}) {
  return (
    <h1>
      {greeting} {someone}
    </h1>
  );
}
