"use client";

interface ProjectRightSideProps {
  description: string;
  challenges: string[];
  outcomes: string[];
  technicalDetails?: {
    title: string;
    content: string;
  }[];
}

export function ProjectRightSide({
  description,
  challenges,
  outcomes,
  technicalDetails,
}: ProjectRightSideProps) {
  return (
    <div className="space-y-8 p-12 max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Project Details</h2>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Key Challenges</h2>
          <ul className="space-y-3 list-disc list-inside text-muted-foreground">
            {challenges.map((challenge, idx) => (
              <li key={idx}>{challenge}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Achieved Outcomes</h2>
          <ul className="space-y-3 list-disc list-inside text-muted-foreground">
            {outcomes.map((outcome, idx) => (
              <li key={idx}>{outcome}</li>
            ))}
          </ul>
        </div>

        {technicalDetails && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Technical Implementation</h2>
            <div className="space-y-4">
              {technicalDetails.map((detail, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="font-medium">{detail.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {detail.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}