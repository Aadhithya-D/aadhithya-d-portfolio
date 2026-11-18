import { agentProfile } from "@/lib/agent-profile";

// Static: rebuilt on each deploy, from the same data as the homepage.
export const dynamic = "force-static";

export function GET() {
  return new Response(agentProfile(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
