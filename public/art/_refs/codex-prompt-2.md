Use the built-in image_gen tool. Do not write SVG/HTML. Do not hallucinate success.

Attached images — roles:
- Watercolor cutouts (bougainvillea, flower cart, postbox, sleepy dog): STYLE ONLY. Fine ink outline, soft watercolor wash, isolated object, lots of empty white, quiet scientific-illustration look. Match this medium exactly.
- Photos of jasmine, a vintage transistor radio, and gulmohar: SUBJECT ONLY. Use real plant/object shapes. No photo backgrounds.

Generate exactly THREE illustrations (one image_gen call each):

1) A small sprig of Arabian jasmine (malli): white flowers and a few green leaves, maybe a couple of buds. Isolated on pure white. Botanical plate. Not a garland poster.
2) A vintage household transistor radio, cream/brown, analog dial, slightly worn. Isolated on pure white. Everyday object, not tech branding. No waveforms, no speaker icons, no text logos if possible.
3) A single diagonal gulmohar (flame of the forest) branch: orange-red flowers and ferny leaves. Isolated on pure white. Not a tree in a park.

Constraints for all:
- Isolated cutout, white background
- No city, temple, skyline, collage, people
- No watermarks, no letters

After each image is generated, copy the PNG from $CODEX_HOME/generated_images into:
/Users/aadhithyad/Web Dev/aadhithya-d-portfolio/public/art/chennai/

Filenames:
- jasmine.png
- radio.png
- gulmohar.png

Then `ls -la` that folder. If image_gen fails, say so clearly.
