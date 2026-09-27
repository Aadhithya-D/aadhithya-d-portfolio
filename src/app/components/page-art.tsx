export function RuleArt() {
  return (
    <div className="relative mt-10 mb-2 h-10 sm:mt-12">
      <img
        src="/art/chennai/filter-coffee.png"
        alt=""
        className="pointer-events-none absolute -bottom-1 left-0 w-[4.25rem] select-none object-contain mix-blend-multiply sm:w-[4.75rem]"
      />
      <img
        src="/art/chennai/radio.png"
        alt=""
        className="pointer-events-none absolute -bottom-1 right-0 w-[3.75rem] select-none object-contain mix-blend-multiply sm:w-16"
      />
      <div className="absolute inset-x-[4.75rem] bottom-[11px] border-t border-[#cfc6b6] sm:inset-x-[5.5rem]" />
    </div>
  );
}
