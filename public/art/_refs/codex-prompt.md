Use the built-in image_gen tool (read ~/.codex/skills/.system/imagegen/SKILL.md if needed). Do not write SVG/HTML. Do not hallucinate success.

I attached images. Roles:
- Images of the Bangalore watercolor cutouts (auto+tree, postbox, bougainvillea, sleepy dog): STYLE ONLY. Fine ink outline, soft watercolor wash, isolated object, lots of empty white, quiet scientific-illustration look. Match this medium exactly.
- Photos of a South Indian filter-coffee davara+tumbler and a yellow/black auto rickshaw: SUBJECT ONLY. Use their real shapes. Do not copy the photo backgrounds, tables, streets, people, or text.

Generate exactly TWO new illustrations with image_gen (one call per image):

1) South Indian filter coffee: stainless-steel tumbler sitting inside a davara bowl, a little coffee foam at the rim. Isolated on pure white. No table. No text.
2) Chennai-style yellow-and-black auto rickshaw, three-quarter front view, slightly worn, isolated on pure white. No people. No street. No number plate text.

Constraints for both:
- Isolated cutout, white background (or transparent)
- No city, temple, skyline, poster, collage
- No waveform, mic icon, or tech graphic
- No watermarks, no letters

After each image is generated, copy the PNG from $CODEX_HOME/generated_images into this exact folder:
/Users/aadhithyad/Web Dev/aadhithya-d-portfolio/public/art/chennai/

Filenames:
- filter-coffee.png
- auto.png

Then list the files you wrote with `ls -la` on that folder. If image_gen is unavailable, say so clearly and do not pretend you made images.
