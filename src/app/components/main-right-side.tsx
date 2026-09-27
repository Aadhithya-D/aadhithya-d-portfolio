"use client";
import { RuleArt } from "@/app/components/page-art";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";

export function RightSideMain() {
  return (
    <div>
      <RuleArt />

      <div className="space-y-12 pt-2 sm:space-y-14">
        <section id="work" className="space-y-4">
          <h2 className="text-[13px] text-muted-foreground">Work</h2>
          <div className="flex flex-col gap-y-1">
            {DATA.work.map((work) => (
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} – ${work.end ?? "Present"}`}
                description={work.description}
              />
            ))}
          </div>
        </section>

        <section id="also" className="space-y-4">
          <h2 className="text-[13px] text-muted-foreground">Also</h2>
          <div className="flex flex-col">
            {DATA.education.map((item) => (
              <div
                key={item.school}
                className="flex items-baseline justify-between gap-4 py-2.5 text-sm"
              >
                <div className="min-w-0">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline-offset-4 hover:underline"
                  >
                    {item.school}
                  </a>
                  <p className="text-muted-foreground">{item.degree}</p>
                </div>
                <p className="shrink-0 tabular-nums text-muted-foreground">
                  {item.start}–{item.end}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer id="contact" className="pb-4 pt-2 text-[13px] text-muted-foreground">
          <a
            href={`mailto:${DATA.contact.email}`}
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            {DATA.contact.email}
          </a>
        </footer>
      </div>
    </div>
  );
}
