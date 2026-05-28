import gsap from 'gsap';
import { Flip }              from 'gsap/Flip';
import { Draggable }         from 'gsap/Draggable';
import { InertiaPlugin }     from 'gsap/InertiaPlugin';
import { MotionPathPlugin }  from 'gsap/MotionPathPlugin';
import { DrawSVGPlugin }     from 'gsap/DrawSVGPlugin';
import { MorphSVGPlugin }    from 'gsap/MorphSVGPlugin';
import { SplitText }         from 'gsap/SplitText';
import { ScrambleTextPlugin }from 'gsap/ScrambleTextPlugin';
import { CustomEase }        from 'gsap/CustomEase';
import { EasePack }          from 'gsap/EasePack';
import { TextPlugin }        from 'gsap/TextPlugin';
import { ScrollTrigger }     from 'gsap/ScrollTrigger';
import * as THREE            from 'three';

gsap.registerPlugin(
  Flip, Draggable, InertiaPlugin, MotionPathPlugin,
  DrawSVGPlugin, MorphSVGPlugin, SplitText,
  ScrambleTextPlugin, CustomEase, EasePack, TextPlugin, ScrollTrigger
);

CustomEase.create('wiggle', 'M0,0 C0,0 0.056,0.442 0.175,0.442 0.294,0.442 0.332,0 0.332,0 0.332,0 0.414,1 0.671,1 0.991,1 1,0 1,0');

// ─── Animation definitions ───────────────────────────────────────────
const ANIMS = [

  // ═══ CORE ════════════════════════════════════════════════════════════
  {
    id: 'fade-in', category: 'core',
    title: 'Fade In',
    desc: 'Opacity from 0 to 1. The most fundamental entrance animation.',
    tags: ['opacity', 'alpha', 'appear', 'entrance'],
    code: `gsap.from(".el", {
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});`,
    html: `<div class="p-box"></div>`,
    animate(c) {
      return gsap.fromTo(c.querySelector('.p-box'),
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: 'power2.out', repeat: -1, yoyo: true, repeatDelay: 0.5 }
      );
    }
  },

  {
    id: 'slide-left', category: 'core',
    title: 'Slide from Left',
    desc: 'Enter from off-screen left with a fade.',
    tags: ['x', 'slide', 'enter', 'translate'],
    code: `gsap.from(".el", {
  x: -80,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
});`,
    html: `<div class="p-box"></div>`,
    animate(c) {
      return gsap.fromTo(c.querySelector('.p-box'),
        { x: -70, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', repeat: -1, yoyo: true, repeatDelay: 0.5 }
      );
    }
  },

  {
    id: 'slide-right', category: 'core',
    title: 'Slide from Right',
    desc: 'Enter from off-screen right with a fade.',
    tags: ['x', 'slide', 'enter', 'translate'],
    code: `gsap.from(".el", {
  x: 80,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
});`,
    html: `<div class="p-box"></div>`,
    animate(c) {
      return gsap.fromTo(c.querySelector('.p-box'),
        { x: 70, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', repeat: -1, yoyo: true, repeatDelay: 0.5 }
      );
    }
  },

  {
    id: 'slide-up', category: 'core',
    title: 'Slide from Bottom',
    desc: 'Rise into position from below — classic hero entrance.',
    tags: ['y', 'slide', 'up', 'enter'],
    code: `gsap.from(".el", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
});`,
    html: `<div class="p-box"></div>`,
    animate(c) {
      return gsap.fromTo(c.querySelector('.p-box'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', repeat: -1, yoyo: true, repeatDelay: 0.5 }
      );
    }
  },

  {
    id: 'scale-in', category: 'core',
    title: 'Scale In',
    desc: 'Grow from zero to full size. Great for modals and popovers.',
    tags: ['scale', 'zoom', 'grow', 'pop'],
    code: `gsap.from(".el", {
  scale: 0,
  opacity: 0,
  duration: 0.7,
  ease: "back.out(1.7)"
});`,
    html: `<div class="p-box"></div>`,
    animate(c) {
      return gsap.fromTo(c.querySelector('.p-box'),
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.7)', repeat: -1, yoyo: true, repeatDelay: 0.5 }
      );
    }
  },

  {
    id: 'rotate-in', category: 'core',
    title: 'Rotate In',
    desc: 'Spin + scale into view from 180°. Good for icons and badges.',
    tags: ['rotation', 'spin', 'scale', 'enter'],
    code: `gsap.from(".el", {
  rotation: 180,
  scale: 0,
  opacity: 0,
  duration: 0.9,
  ease: "back.out(2)"
});`,
    html: `<div class="p-box" style="border-radius:8px;"></div>`,
    animate(c) {
      return gsap.fromTo(c.querySelector('.p-box'),
        { rotation: 180, scale: 0, opacity: 0 },
        { rotation: 0, scale: 1, opacity: 1, duration: 0.9, ease: 'back.out(2)', repeat: -1, yoyo: true, repeatDelay: 0.6 }
      );
    }
  },

  {
    id: 'rotate-spin', category: 'core',
    title: 'Continuous Spin',
    desc: 'Endless rotation at constant speed. Use for loaders.',
    tags: ['rotation', 'spin', 'loop', 'loader'],
    code: `gsap.to(".el", {
  rotation: 360,
  duration: 2,
  ease: "none",
  repeat: -1
});`,
    html: `<div style="width:50px;height:50px;border-radius:10px;background:linear-gradient(45deg,#00d4aa,#7c3aed);border:3px solid transparent;outline:3px solid #1a1a2e;"></div>`,
    animate(c) {
      return gsap.to(c.querySelector('div'), { rotation: 360, duration: 2, ease: 'none', repeat: -1 });
    }
  },

  {
    id: 'skew-in', category: 'core',
    title: 'Skew In',
    desc: 'Skew + slide for a dynamic, editorial entrance.',
    tags: ['skewX', 'skew', 'slide', 'editorial'],
    code: `gsap.from(".el", {
  skewX: 25,
  x: -60,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
});`,
    html: `<div class="p-box" style="width:90px;height:36px;border-radius:6px;"></div>`,
    animate(c) {
      return gsap.fromTo(c.querySelector('.p-box'),
        { skewX: 25, x: -60, opacity: 0 },
        { skewX: 0, x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', repeat: -1, yoyo: true, repeatDelay: 0.5 }
      );
    }
  },

  {
    id: 'blur-reveal', category: 'core',
    title: 'Blur Reveal',
    desc: 'Animate from blurry to sharp focus with opacity.',
    tags: ['filter', 'blur', 'focus', 'reveal'],
    code: `gsap.from(".el", {
  filter: "blur(20px)",
  opacity: 0,
  duration: 1.2,
  ease: "power2.out"
});`,
    html: `<div class="p-box"></div>`,
    animate(c) {
      return gsap.fromTo(c.querySelector('.p-box'),
        { filter: 'blur(18px)', opacity: 0 },
        { filter: 'blur(0px)', opacity: 1, duration: 1.2, ease: 'power2.out', repeat: -1, yoyo: true, repeatDelay: 0.5 }
      );
    }
  },

  {
    id: 'clip-reveal', category: 'core',
    title: 'Clip Path Reveal',
    desc: 'Wipe in from left using clip-path. Sharp and cinematic.',
    tags: ['clipPath', 'wipe', 'reveal', 'mask'],
    code: `gsap.from(".el", {
  clipPath: "inset(0 100% 0 0)",
  duration: 1,
  ease: "power3.inOut"
});`,
    html: `<div class="p-box" style="width:100px;height:38px;border-radius:6px;"></div>`,
    animate(c) {
      return gsap.fromTo(c.querySelector('.p-box'),
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power3.inOut', repeat: -1, yoyo: true, repeatDelay: 0.5 }
      );
    }
  },

  // ═══ EASING ══════════════════════════════════════════════════════════
  {
    id: 'elastic', category: 'easing',
    title: 'Elastic Out',
    desc: 'Spring-like oscillation — feels physical and playful.',
    tags: ['elastic', 'spring', 'bounce', 'overshoot'],
    code: `gsap.from(".el", {
  scale: 0,
  duration: 1.5,
  ease: "elastic.out(1, 0.3)"
});`,
    html: `<div class="p-circle"></div>`,
    animate(c) {
      return gsap.fromTo(c.querySelector('.p-circle'),
        { scale: 0 },
        { scale: 1, duration: 1.5, ease: 'elastic.out(1, 0.3)', repeat: -1, repeatDelay: 0.4 }
      );
    }
  },

  {
    id: 'bounce-ease', category: 'easing',
    title: 'Bounce Out',
    desc: 'Gravity bounce on landing. Good for dropped elements.',
    tags: ['bounce', 'gravity', 'land'],
    code: `gsap.from(".el", {
  y: -70,
  duration: 1.2,
  ease: "bounce.out"
});`,
    html: `<div class="p-circle"></div>`,
    animate(c) {
      return gsap.fromTo(c.querySelector('.p-circle'),
        { y: -60 },
        { y: 0, duration: 1.2, ease: 'bounce.out', repeat: -1, repeatDelay: 0.5 }
      );
    }
  },

  {
    id: 'back-out', category: 'easing',
    title: 'Back Out',
    desc: 'Overshoots target then settles. Great for button clicks.',
    tags: ['back', 'overshoot', 'pop'],
    code: `gsap.from(".el", {
  scale: 0,
  duration: 0.7,
  ease: "back.out(2.5)"
});`,
    html: `<div class="p-circle"></div>`,
    animate(c) {
      return gsap.fromTo(c.querySelector('.p-circle'),
        { scale: 0 },
        { scale: 1, duration: 0.7, ease: 'back.out(2.5)', repeat: -1, yoyo: true, repeatDelay: 0.5 }
      );
    }
  },

  {
    id: 'steps-ease', category: 'easing',
    title: 'Steps',
    desc: 'Discrete jumps instead of continuous motion. Like a ticker.',
    tags: ['steps', 'discrete', 'ticker', 'snap'],
    code: `gsap.to(".el", {
  x: 100,
  duration: 1.2,
  ease: "steps(8)"
});`,
    html: `<div class="p-circle" style="width:28px;height:28px;"></div>`,
    animate(c) {
      return gsap.fromTo(c.querySelector('.p-circle'),
        { x: -48 },
        { x: 48, duration: 1.2, ease: 'steps(8)', repeat: -1, yoyo: true, repeatDelay: 0.3 }
      );
    }
  },

  {
    id: 'slowmo-ease', category: 'easing',
    title: 'SlowMo Ease',
    desc: 'Fast → slow → fast. Cinematic "bullet time" feel.',
    tags: ['slowmo', 'cinematic', 'slow', 'ease'],
    code: `gsap.to(".el", {
  x: 100,
  duration: 2.5,
  ease: "slow(0.3, 0.7, false)"
});`,
    html: `<div class="p-circle" style="width:28px;height:28px;"></div>`,
    animate(c) {
      return gsap.fromTo(c.querySelector('.p-circle'),
        { x: -48 },
        { x: 48, duration: 2.5, ease: 'slow(0.3, 0.7, false)', repeat: -1, yoyo: true, repeatDelay: 0.2 }
      );
    }
  },

  {
    id: 'custom-ease', category: 'easing',
    title: 'Custom Ease',
    desc: 'Bézier-defined wiggle curve via CustomEase.create().',
    tags: ['CustomEase', 'bezier', 'wiggle', 'custom'],
    code: `CustomEase.create("myEase",
  "M0,0 C0.056,0.442 0.175,0.442 0.332,0 0.414,1 0.671,1 1,0");

gsap.to(".el", {
  x: 100,
  ease: "myEase",
  duration: 1.5
});`,
    html: `<div class="p-circle" style="width:28px;height:28px;"></div>`,
    animate(c) {
      return gsap.fromTo(c.querySelector('.p-circle'),
        { x: -48 },
        { x: 48, duration: 1.5, ease: 'wiggle', repeat: -1, yoyo: true, repeatDelay: 0.3 }
      );
    }
  },

  // ═══ STAGGER ═════════════════════════════════════════════════════════
  {
    id: 'stagger-fade', category: 'stagger',
    title: 'Stagger Fade',
    desc: 'Elements fade in one after another in sequence.',
    tags: ['stagger', 'fade', 'sequence', 'list'],
    code: `gsap.from(".items", {
  opacity: 0,
  y: 20,
  stagger: 0.12,
  duration: 0.5,
  ease: "power2.out"
});`,
    html: `<div class="p-dots"><div class="p-dot"></div><div class="p-dot"></div><div class="p-dot"></div><div class="p-dot"></div><div class="p-dot"></div></div>`,
    animate(c) {
      return gsap.fromTo(c.querySelectorAll('.p-dot'),
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.45, ease: 'power2.out', repeat: -1, yoyo: true, repeatDelay: 0.4 }
      );
    }
  },

  {
    id: 'stagger-center', category: 'stagger',
    title: 'Stagger from Center',
    desc: 'Ripple outward from the middle element.',
    tags: ['stagger', 'center', 'ripple', 'from'],
    code: `gsap.from(".items", {
  scale: 0,
  opacity: 0,
  stagger: { each: 0.1, from: "center" },
  ease: "back.out(2)"
});`,
    html: `<div class="p-dots"><div class="p-dot"></div><div class="p-dot"></div><div class="p-dot"></div><div class="p-dot"></div><div class="p-dot"></div></div>`,
    animate(c) {
      return gsap.fromTo(c.querySelectorAll('.p-dot'),
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, ease: 'back.out(2)', stagger: { each: 0.1, from: 'center' }, repeat: -1, yoyo: true, repeatDelay: 0.5 }
      );
    }
  },

  {
    id: 'stagger-random', category: 'stagger',
    title: 'Stagger Random',
    desc: 'Grid cells appear in a random, organic order.',
    tags: ['stagger', 'random', 'grid', 'organic'],
    code: `gsap.from(".cells", {
  scale: 0,
  opacity: 0,
  stagger: { each: 0.07, from: "random" },
  ease: "back.out(1.7)"
});`,
    html: `<div class="p-grid">${Array(9).fill('<div class="p-cell"></div>').join('')}</div>`,
    animate(c) {
      return gsap.fromTo(c.querySelectorAll('.p-cell'),
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, ease: 'back.out(1.7)', stagger: { each: 0.07, from: 'random' }, repeat: -1, yoyo: true, repeatDelay: 0.5 }
      );
    }
  },

  {
    id: 'stagger-wave', category: 'stagger',
    title: 'Wave Stagger',
    desc: 'Bars animate in a continuous, flowing wave.',
    tags: ['stagger', 'wave', 'bars', 'loop'],
    code: `gsap.to(".bars", {
  scaleY: 0.2,
  stagger: {
    each: 0.09,
    from: "start",
    yoyo: true,
    repeat: -1
  },
  ease: "power1.inOut",
  duration: 0.45,
  transformOrigin: "bottom"
});`,
    html: `<div class="p-bars"><div class="p-bar" style="height:48px"></div><div class="p-bar" style="height:36px"></div><div class="p-bar" style="height:52px"></div><div class="p-bar" style="height:28px"></div><div class="p-bar" style="height:44px"></div><div class="p-bar" style="height:38px"></div><div class="p-bar" style="height:50px"></div></div>`,
    animate(c) {
      return gsap.to(c.querySelectorAll('.p-bar'), {
        scaleY: 0.15, stagger: { each: 0.09, from: 'start', yoyo: true, repeat: -1 },
        ease: 'power1.inOut', duration: 0.45, transformOrigin: 'bottom'
      });
    }
  },

  // ═══ TIMELINE ════════════════════════════════════════════════════════
  {
    id: 'timeline-seq', category: 'timeline',
    title: 'Sequential Timeline',
    desc: 'Chain animations in order. Each plays after the previous.',
    tags: ['timeline', 'sequence', 'chain', 'order'],
    code: `const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

tl.from(".el1", { x: -60, opacity: 0, duration: 0.4 })
  .from(".el2", { y: -30, opacity: 0, duration: 0.4 })
  .from(".el3", { x: 60,  opacity: 0, duration: 0.4 });`,
    html: `<div style="display:flex;flex-direction:column;gap:7px;align-items:center"><div class="p-mini" style="width:90px;height:14px;"></div><div class="p-mini" style="width:90px;height:14px;opacity:0.7"></div><div class="p-mini" style="width:90px;height:14px;opacity:0.5"></div></div>`,
    animate(c) {
      const boxes = c.querySelectorAll('.p-mini');
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
      tl.from(boxes[0], { x: -50, opacity: 0, duration: 0.35 })
        .from(boxes[1], { y: -25, opacity: 0, duration: 0.35 })
        .from(boxes[2], { x: 50,  opacity: 0, duration: 0.35 });
      return tl;
    }
  },

  {
    id: 'timeline-overlap', category: 'timeline',
    title: 'Overlapping Timeline',
    desc: 'Overlap animations with negative position offsets ("-=0.3").',
    tags: ['timeline', 'overlap', 'position', 'offset'],
    code: `const tl = gsap.timeline({ repeat: -1 });

tl.from(".el1", { opacity: 0, x: -40, duration: 0.5 })
  .from(".el2", { opacity: 0, x: -40, duration: 0.5 }, "-=0.3")
  .from(".el3", { opacity: 0, x: -40, duration: 0.5 }, "-=0.3");`,
    html: `<div style="display:flex;flex-direction:column;gap:7px;"><div class="p-mini" style="width:90px;height:12px;"></div><div class="p-mini" style="width:70px;height:12px;opacity:0.75"></div><div class="p-mini" style="width:80px;height:12px;opacity:0.55"></div></div>`,
    animate(c) {
      const boxes = c.querySelectorAll('.p-mini');
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
      tl.from(boxes[0], { opacity: 0, x: -45, duration: 0.45 })
        .from(boxes[1], { opacity: 0, x: -45, duration: 0.45 }, '-=0.28')
        .from(boxes[2], { opacity: 0, x: -45, duration: 0.45 }, '-=0.28');
      return tl;
    }
  },

  {
    id: 'timeline-labels', category: 'timeline',
    title: 'Timeline Labels',
    desc: 'addLabel() creates named sync points across a timeline.',
    tags: ['timeline', 'label', 'sync', 'addLabel'],
    code: `const tl = gsap.timeline({ repeat: -1 });

tl.addLabel("intro")
  .from(".icon", { scale: 0, duration: 0.4 }, "intro")
  .from(".text", { opacity: 0, x: 20,  duration: 0.4 }, "intro+=0.1")
  .addLabel("pulse")
  .to(".icon", { scale: 1.2, yoyo: true, repeat: 1, duration: 0.2 }, "pulse");`,
    html: `<div style="display:flex;align-items:center;gap:12px"><div class="p-circle" style="width:30px;height:30px;flex-shrink:0;"></div><div style="display:flex;flex-direction:column;gap:5px"><div class="p-mini" style="width:66px;height:10px;"></div><div class="p-mini" style="width:48px;height:10px;opacity:0.55"></div></div></div>`,
    animate(c) {
      const icon = c.querySelector('.p-circle');
      const bars = c.querySelectorAll('.p-mini');
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
      tl.addLabel('intro')
        .from(icon, { scale: 0, duration: 0.35, ease: 'back.out(2)' }, 'intro')
        .from(bars, { opacity: 0, x: 18, stagger: 0.08, duration: 0.35 }, 'intro+=0.12')
        .addLabel('pulse')
        .to(icon, { scale: 1.2, duration: 0.18, ease: 'power2.out', yoyo: true, repeat: 1 }, 'pulse');
      return tl;
    }
  },

  // ═══ TEXT ════════════════════════════════════════════════════════════
  {
    id: 'split-chars', category: 'text',
    title: 'Chars Reveal',
    desc: 'SplitText breaks text into chars, animated with stagger.',
    tags: ['SplitText', 'chars', 'stagger', 'text', 'reveal'],
    code: `const split = SplitText.create(".heading", {
  type: "chars"
});

gsap.from(split.chars, {
  opacity: 0,
  y: 20,
  stagger: 0.04,
  duration: 0.5,
  ease: "power2.out"
});`,
    html: `<p class="p-text" style="font-size:2rem;font-weight:800;letter-spacing:3px;">GSAP</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const split = SplitText.create(el, { type: 'chars' });
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
      tl.from(split.chars, { opacity: 0, y: 18, stagger: 0.06, duration: 0.4, ease: 'power2.out' })
        .to(split.chars, { opacity: 0, y: -18, stagger: 0.06, duration: 0.35, ease: 'power2.in', delay: 0.5 });
      return tl;
    }
  },

  {
    id: 'split-words', category: 'text',
    title: 'Words Slide Up',
    desc: 'SplitText masks words, each rising from below (overflow clip).',
    tags: ['SplitText', 'words', 'mask', 'reveal', 'text'],
    code: `const split = SplitText.create(".el", {
  type: "words",
  mask: "words"
});

gsap.from(split.words, {
  y: "110%",
  stagger: 0.1,
  duration: 0.7,
  ease: "power3.out"
});`,
    html: `<p class="p-text" style="font-size:0.85rem;font-weight:700;text-align:center;max-width:130px;line-height:1.5;">Animate Words</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const split = SplitText.create(el, { type: 'words', mask: 'words' });
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
      tl.from(split.words, { y: '110%', stagger: 0.1, duration: 0.6, ease: 'power3.out' })
        .to(split.words, { y: '-110%', stagger: 0.1, duration: 0.5, ease: 'power3.in', delay: 0.6 });
      return tl;
    }
  },

  {
    id: 'split-lines', category: 'text',
    title: 'Lines Mask Reveal',
    desc: 'Each line rises from behind a mask, one after another.',
    tags: ['SplitText', 'lines', 'mask', 'reveal', 'paragraph'],
    code: `const split = SplitText.create(".para", {
  type: "lines",
  mask: "lines"
});

gsap.from(split.lines, {
  y: "100%",
  opacity: 0,
  stagger: 0.15,
  duration: 0.7,
  ease: "power2.out"
});`,
    html: `<p class="p-text" style="font-size:0.72rem;line-height:1.9;text-align:center;max-width:120px;">First line here<br>Second line text<br>Third line here</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const split = SplitText.create(el, { type: 'lines', mask: 'lines' });
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
      tl.from(split.lines, { y: '100%', opacity: 0, stagger: 0.14, duration: 0.6, ease: 'power2.out' })
        .to(split.lines, { y: '-100%', opacity: 0, stagger: 0.1, duration: 0.45, ease: 'power2.in', delay: 0.6 });
      return tl;
    }
  },

  {
    id: 'scramble-text', category: 'text',
    title: 'ScrambleText',
    desc: 'Text scrambles through random chars before resolving.',
    tags: ['ScrambleText', 'scramble', 'glitch', 'reveal', 'text'],
    code: `gsap.to(".el", {
  duration: 1.5,
  scrambleText: {
    text: "New content here",
    chars: "upperCase",
    revealDelay: 0.3
  }
});`,
    html: `<p class="p-text" style="font-size:1rem;font-weight:700;font-family:monospace;letter-spacing:1px;">START</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const phrases = ['HELLO', 'GSAP', 'MOTION', 'CREATE'];
      let i = 0;
      const tl = gsap.timeline({ repeat: -1 });
      phrases.forEach(p => {
        tl.to(el, { duration: 1.2, scrambleText: { text: p, chars: 'upperCase', revealDelay: 0.2 } })
          .to({}, { duration: 0.5 });
      });
      return tl;
    }
  },

  {
    id: 'typewriter', category: 'text',
    title: 'Typewriter',
    desc: 'TextPlugin types and deletes text character by character.',
    tags: ['TextPlugin', 'typewriter', 'type', 'text'],
    code: `import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

const tl = gsap.timeline({ repeat: -1 });
tl.to(".el", {
    duration: 1.5,
    text: { value: "Hello World", delimiter: "" }
  })
  .to(".el", {
    duration: 0.8,
    text: { value: "", delimiter: "" },
    delay: 0.5
  });`,
    html: `<p class="p-text" style="font-size:0.9rem;font-weight:600;font-family:monospace;min-width:120px;text-align:center;">&nbsp;</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const phrases = ['Hello World', 'GSAP Rocks', 'Animate!'];
      const tl = gsap.timeline({ repeat: -1 });
      phrases.forEach(p => {
        tl.to(el, { duration: p.length * 0.09, text: { value: p, delimiter: '' }, ease: 'none' })
          .to({}, { duration: 0.5 })
          .to(el, { duration: p.length * 0.05, text: { value: '', delimiter: '' }, ease: 'none' })
          .to({}, { duration: 0.2 });
      });
      return tl;
    }
  },

  // ═══ TEXT (extended) ═════════════════════════════════════════════════
  {
    id: 'chars-drop', category: 'text',
    title: 'Chars Drop In',
    desc: 'Each character falls from above and bounces into place.',
    tags: ['SplitText', 'chars', 'drop', 'bounce', 'stagger'],
    code: `const split = SplitText.create(".el", { type: "chars" });

gsap.from(split.chars, {
  y: -50,
  opacity: 0,
  stagger: 0.07,
  duration: 0.8,
  ease: "bounce.out"
});`,
    html: `<p class="p-text" style="font-size:2.4rem;font-weight:800;letter-spacing:5px;">DROP</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const split = SplitText.create(el, { type: 'chars' });
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });
      tl.from(split.chars, { y: -48, opacity: 0, stagger: 0.07, duration: 0.8, ease: 'bounce.out' })
        .to(split.chars, { y: 48, opacity: 0, stagger: 0.05, duration: 0.3, ease: 'power2.in', delay: 0.5 });
      return tl;
    }
  },

  {
    id: 'chars-scatter', category: 'text',
    title: 'Chars Scatter',
    desc: 'Characters fly in from random positions — each different on repeat.',
    tags: ['SplitText', 'chars', 'scatter', 'random', 'fly'],
    code: `const split = SplitText.create(".el", { type: "chars" });

gsap.set(split.chars, {
  x: () => gsap.utils.random(-60, 60),
  y: () => gsap.utils.random(-40, 40),
  rotation: () => gsap.utils.random(-30, 30),
  opacity: 0
});

gsap.to(split.chars, {
  x: 0, y: 0, rotation: 0, opacity: 1,
  stagger: 0.04, duration: 0.6, ease: "power3.out"
});`,
    html: `<p class="p-text" style="font-size:2rem;font-weight:800;letter-spacing:3px;">GSAP</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const split = SplitText.create(el, { type: 'chars' });
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });
      tl.set(split.chars, { x: () => gsap.utils.random(-50, 50), y: () => gsap.utils.random(-30, 30), rotation: () => gsap.utils.random(-25, 25), opacity: 0 })
        .to(split.chars, { x: 0, y: 0, rotation: 0, opacity: 1, stagger: 0.05, duration: 0.55, ease: 'power3.out' })
        .to({}, { duration: 0.5 })
        .to(split.chars, { x: () => gsap.utils.random(-50, 50), y: () => gsap.utils.random(-30, 30), rotation: () => gsap.utils.random(-25, 25), opacity: 0, stagger: 0.04, duration: 0.4, ease: 'power2.in' });
      return tl;
    }
  },

  {
    id: 'chars-wave', category: 'text',
    title: 'Chars Wave',
    desc: 'Staggered yoyo per char creates a continuous rolling wave.',
    tags: ['SplitText', 'chars', 'wave', 'continuous', 'stagger', 'yoyo'],
    code: `const split = SplitText.create(".el", { type: "chars" });

// stagger.yoyo + repeat = infinite wave per char
gsap.to(split.chars, {
  y: -16,
  duration: 0.35,
  ease: "power1.inOut",
  stagger: { each: 0.06, yoyo: true, repeat: -1 }
});`,
    html: `<p class="p-text" style="font-size:1.6rem;font-weight:800;letter-spacing:2px;">ANIMATE</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const split = SplitText.create(el, { type: 'chars' });
      return gsap.to(split.chars, {
        y: -15, duration: 0.32, ease: 'power1.inOut',
        stagger: { each: 0.06, yoyo: true, repeat: -1 }
      });
    }
  },

  {
    id: 'chars-scale-wave', category: 'text',
    title: 'Scale Wave',
    desc: 'Staggered scale pulses create an undulating wave across chars.',
    tags: ['SplitText', 'chars', 'scale', 'wave', 'stagger', 'pulse'],
    code: `const split = SplitText.create(".el", { type: "chars" });

gsap.to(split.chars, {
  scale: 1.5,
  duration: 0.4,
  ease: "power1.inOut",
  stagger: { each: 0.07, yoyo: true, repeat: -1 }
});`,
    html: `<p class="p-text" style="font-size:1.6rem;font-weight:800;letter-spacing:3px;">PULSE</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const split = SplitText.create(el, { type: 'chars' });
      return gsap.to(split.chars, {
        scale: 1.5, duration: 0.38, ease: 'power1.inOut',
        stagger: { each: 0.07, yoyo: true, repeat: -1 }
      });
    }
  },

  {
    id: 'chars-3d-flip', category: 'text',
    title: 'Chars 3D Flip',
    desc: 'Each character flips in on its Y axis — good for menus and lists.',
    tags: ['SplitText', 'chars', 'rotationY', '3d', 'perspective', 'flip'],
    code: `const split = SplitText.create(".el", { type: "chars" });

gsap.from(split.chars, {
  rotationY: 90,
  opacity: 0,
  transformPerspective: 400,
  stagger: 0.06,
  duration: 0.5,
  ease: "back.out(1.7)"
});`,
    html: `<p class="p-text" style="font-size:2rem;font-weight:800;letter-spacing:3px;">FLIP</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const split = SplitText.create(el, { type: 'chars' });
      return gsap.fromTo(split.chars,
        { rotationY: 90, opacity: 0, transformPerspective: 400 },
        { rotationY: 0, opacity: 1, transformPerspective: 400, stagger: 0.07, duration: 0.5, ease: 'back.out(1.7)', repeat: -1, yoyo: true, repeatDelay: 0.5 }
      );
    }
  },

  {
    id: 'chars-spin', category: 'text',
    title: 'Chars Spin In',
    desc: 'Each character rotates a full 360° into position with stagger.',
    tags: ['SplitText', 'chars', 'rotation', 'spin', 'stagger'],
    code: `const split = SplitText.create(".el", { type: "chars" });

gsap.from(split.chars, {
  rotation: 360,
  opacity: 0,
  scale: 0,
  stagger: 0.05,
  duration: 0.6,
  ease: "back.out(2)"
});`,
    html: `<p class="p-text" style="font-size:2rem;font-weight:800;letter-spacing:3px;">SPIN</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const split = SplitText.create(el, { type: 'chars' });
      return gsap.fromTo(split.chars,
        { rotation: 360, opacity: 0, scale: 0 },
        { rotation: 0, opacity: 1, scale: 1, stagger: 0.06, duration: 0.6, ease: 'back.out(2)', repeat: -1, yoyo: true, repeatDelay: 0.5 }
      );
    }
  },

  {
    id: 'chars-blur', category: 'text',
    title: 'Chars Blur Reveal',
    desc: 'Each character de-blurs from fog to sharp focus individually.',
    tags: ['SplitText', 'chars', 'blur', 'filter', 'focus', 'stagger'],
    code: `const split = SplitText.create(".el", { type: "chars" });

gsap.from(split.chars, {
  filter: "blur(12px)",
  opacity: 0,
  stagger: 0.06,
  duration: 0.5,
  ease: "power2.out"
});`,
    html: `<p class="p-text" style="font-size:2rem;font-weight:800;letter-spacing:3px;">BLUR</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const split = SplitText.create(el, { type: 'chars' });
      return gsap.fromTo(split.chars,
        { filter: 'blur(12px)', opacity: 0 },
        { filter: 'blur(0px)', opacity: 1, stagger: 0.06, duration: 0.5, ease: 'power2.out', repeat: -1, yoyo: true, repeatDelay: 0.5 }
      );
    }
  },

  {
    id: 'chars-paint', category: 'text',
    title: 'Chars Paint In',
    desc: 'Each character is revealed with a left-to-right clip wipe.',
    tags: ['SplitText', 'chars', 'clipPath', 'wipe', 'reveal', 'paint'],
    code: `const split = SplitText.create(".el", { type: "chars" });

gsap.fromTo(split.chars,
  { clipPath: "inset(0 100% 0 0)" },
  {
    clipPath: "inset(0 0% 0 0)",
    stagger: 0.07,
    duration: 0.35,
    ease: "power3.out"
  }
);`,
    html: `<p class="p-text" style="font-size:1.8rem;font-weight:800;letter-spacing:3px;">PAINT</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const split = SplitText.create(el, { type: 'chars' });
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
      tl.fromTo(split.chars, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', stagger: 0.07, duration: 0.32, ease: 'power3.out' })
        .to(split.chars, { clipPath: 'inset(0 0% 0 100%)', stagger: 0.05, duration: 0.22, ease: 'power2.in', delay: 0.5 });
      return tl;
    }
  },

  {
    id: 'chars-random-pop', category: 'text',
    title: 'Random Order Pop',
    desc: 'Characters appear in random order — not sequentially left to right.',
    tags: ['SplitText', 'chars', 'random', 'stagger', 'pop', 'order'],
    code: `const split = SplitText.create(".el", { type: "chars" });

gsap.from(split.chars, {
  opacity: 0,
  scale: 0,
  stagger: { each: 0.06, from: "random" },
  ease: "back.out(2)",
  duration: 0.4
});`,
    html: `<p class="p-text" style="font-size:1.4rem;font-weight:800;letter-spacing:2px;">RANDOM</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const split = SplitText.create(el, { type: 'chars' });
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
      tl.from(split.chars, { opacity: 0, scale: 0, stagger: { each: 0.06, from: 'random' }, ease: 'back.out(2)', duration: 0.4 })
        .to(split.chars, { opacity: 0, scale: 0, stagger: { each: 0.04, from: 'random' }, ease: 'power2.in', duration: 0.3, delay: 0.5 });
      return tl;
    }
  },

  {
    id: 'words-3d', category: 'text',
    title: 'Words 3D Rotate',
    desc: 'Words rotate on the X axis using perspective — like a flipboard.',
    tags: ['SplitText', 'words', 'rotationX', '3d', 'perspective', 'flipboard'],
    code: `const split = SplitText.create(".el", { type: "words" });

gsap.from(split.words, {
  rotationX: 90,
  opacity: 0,
  transformPerspective: 600,
  transformOrigin: "0% 50%",
  stagger: 0.12,
  duration: 0.7,
  ease: "power2.out"
});`,
    html: `<p class="p-text" style="font-size:1rem;font-weight:800;text-align:center;line-height:1.9;">3D Text<br>Effect</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const split = SplitText.create(el, { type: 'words' });
      return gsap.fromTo(split.words,
        { rotationX: 90, opacity: 0, transformPerspective: 600, transformOrigin: '0% 50%' },
        { rotationX: 0, opacity: 1, stagger: 0.13, duration: 0.65, ease: 'power2.out', repeat: -1, yoyo: true, repeatDelay: 0.5 }
      );
    }
  },

  {
    id: 'words-scale', category: 'text',
    title: 'Words Scale Pop',
    desc: 'Words pop in from zero scale with an overshoot — good for emphasis.',
    tags: ['SplitText', 'words', 'scale', 'back', 'pop'],
    code: `const split = SplitText.create(".el", { type: "words" });

gsap.from(split.words, {
  scale: 0,
  opacity: 0,
  stagger: 0.1,
  duration: 0.6,
  ease: "back.out(2.5)"
});`,
    html: `<p class="p-text" style="font-size:1rem;font-weight:800;text-align:center;line-height:1.9;">Pop Up<br>Words</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const split = SplitText.create(el, { type: 'words' });
      return gsap.fromTo(split.words,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.11, duration: 0.6, ease: 'back.out(2.5)', repeat: -1, yoyo: true, repeatDelay: 0.5 }
      );
    }
  },

  {
    id: 'words-bounce', category: 'text',
    title: 'Words Bounce Drop',
    desc: 'Words fall from above and bounce on landing.',
    tags: ['SplitText', 'words', 'bounce', 'drop', 'y'],
    code: `const split = SplitText.create(".el", { type: "words" });

gsap.from(split.words, {
  y: -60,
  opacity: 0,
  stagger: 0.12,
  duration: 0.9,
  ease: "bounce.out"
});`,
    html: `<p class="p-text" style="font-size:0.9rem;font-weight:800;text-align:center;line-height:1.9;">Bounce<br>Drop In</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const split = SplitText.create(el, { type: 'words' });
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
      tl.from(split.words, { y: -55, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'bounce.out' })
        .to(split.words, { y: 55, opacity: 0, stagger: 0.08, duration: 0.35, ease: 'power2.in', delay: 0.5 });
      return tl;
    }
  },

  {
    id: 'lines-alternate', category: 'text',
    title: 'Lines Alternate',
    desc: 'Odd lines slide from left, even from right — clean editorial rhythm.',
    tags: ['SplitText', 'lines', 'alternate', 'left', 'right', 'x'],
    code: `const split = SplitText.create(".el", {
  type: "lines",
  mask: "lines"
});

split.lines.forEach((line, i) => {
  gsap.from(line, {
    x: i % 2 === 0 ? -60 : 60,
    opacity: 0,
    duration: 0.6,
    delay: i * 0.1,
    ease: "power3.out"
  });
});`,
    html: `<p class="p-text" style="font-size:0.72rem;font-weight:700;line-height:2;text-align:center;max-width:130px;">First line here<br>Second line text<br>Third line here</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const split = SplitText.create(el, { type: 'lines', mask: 'lines' });
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });
      split.lines.forEach((line, i) => {
        tl.from(line, { x: i % 2 === 0 ? -55 : 55, opacity: 0, duration: 0.5, ease: 'power3.out' }, i * 0.1);
      });
      tl.to({}, { duration: 0.5 });
      split.lines.forEach((line, i) => {
        tl.to(line, { x: i % 2 === 0 ? 55 : -55, opacity: 0, duration: 0.3, ease: 'power2.in' }, `>-=0.05`);
      });
      return tl;
    }
  },

  {
    id: 'glitch-text', category: 'text',
    title: 'Glitch Effect',
    desc: 'Rapid jitter, skew, and hue shifts for a digital glitch look.',
    tags: ['glitch', 'filter', 'hue-rotate', 'x', 'skewX', 'digital'],
    code: `const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

for (let i = 0; i < 5; i++) {
  tl.to(".el", {
      x: () => gsap.utils.random(-8, 8),
      skewX: () => gsap.utils.random(-4, 4),
      filter: "hue-rotate(90deg) brightness(1.5)",
      duration: 0.05
    })
    .to(".el", {
      x: 0, skewX: 0,
      filter: "hue-rotate(0deg) brightness(1)",
      duration: 0.05
    });
}`,
    html: `<p class="p-text" style="font-size:1.5rem;font-weight:800;letter-spacing:2px;color:#00d4aa;">GLITCH</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
      for (let i = 0; i < 5; i++) {
        tl.to(el, { x: () => gsap.utils.random(-8, 8), skewX: () => gsap.utils.random(-4, 4), filter: 'hue-rotate(90deg) brightness(1.8)', duration: 0.045 })
          .to(el, { x: 0, skewX: 0, filter: 'hue-rotate(0deg) brightness(1)', duration: 0.045 });
      }
      tl.to({}, { duration: 0.4 });
      for (let i = 0; i < 3; i++) {
        tl.to(el, { x: () => gsap.utils.random(-12, 12), filter: 'hue-rotate(180deg) brightness(2)', duration: 0.04 })
          .to(el, { x: 0, filter: 'hue-rotate(0deg) brightness(1)', duration: 0.04 });
      }
      return tl;
    }
  },

  {
    id: 'neon-flicker', category: 'text',
    title: 'Neon Flicker',
    desc: 'Irregular opacity flicker simulates a real neon sign powering on.',
    tags: ['neon', 'flicker', 'opacity', 'glow', 'textShadow'],
    code: `const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

tl.to(".el", { opacity: 0.05, duration: 0.04 })
  .to(".el", { opacity: 1,    duration: 0.05 })
  .to(".el", { opacity: 0.15, duration: 0.09 })
  .to(".el", { opacity: 1,    duration: 0.05 })
  .to(".el", { opacity: 0.3,  duration: 0.15 })
  .to(".el", { opacity: 1,    duration: 0.07 });`,
    html: `<p class="p-text" style="font-size:1.8rem;font-weight:800;letter-spacing:3px;color:#00d4aa;text-shadow:0 0 8px #00d4aa,0 0 20px #00d4aa,0 0 40px #00d4aa;">NEON</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      tl.to(el, { opacity: 0.05, duration: 0.04 })
        .to(el, { opacity: 1,    duration: 0.05 })
        .to(el, { opacity: 0.15, duration: 0.09 })
        .to(el, { opacity: 1,    duration: 0.05 })
        .to(el, { opacity: 0.3,  duration: 0.15 })
        .to(el, { opacity: 1,    duration: 0.07 })
        .to({}, { duration: 0.7 })
        .to(el, { opacity: 0,    duration: 0.04 })
        .to(el, { opacity: 1,    duration: 0.04 });
      return tl;
    }
  },

  {
    id: 'letter-spacing', category: 'text',
    title: 'Letter Spacing Expand',
    desc: 'Text expands from compressed to wide letter spacing with blur.',
    tags: ['letterSpacing', 'spacing', 'expand', 'compress', 'typography'],
    code: `gsap.from(".el", {
  letterSpacing: "-8px",
  opacity: 0,
  filter: "blur(6px)",
  duration: 1.5,
  ease: "power2.out"
});`,
    html: `<p class="p-text" style="font-size:1rem;font-weight:800;text-transform:uppercase;letter-spacing:0;">SPACING</p>`,
    animate(c) {
      return gsap.fromTo(c.querySelector('.p-text'),
        { letterSpacing: '-8px', opacity: 0, filter: 'blur(5px)' },
        { letterSpacing: '8px', opacity: 1, filter: 'blur(0px)', duration: 1.4, ease: 'power2.out', repeat: -1, yoyo: true, repeatDelay: 0.4 }
      );
    }
  },

  {
    id: 'gradient-flow', category: 'text',
    title: 'Gradient Flow',
    desc: 'A colour gradient scrolls continuously across the text.',
    tags: ['gradient', 'color', 'backgroundPosition', 'flow', 'animated', 'CSS'],
    code: `/* CSS on the element:
  background: linear-gradient(90deg,
    #00d4aa, #7c3aed, #ff6b6b, #00d4aa);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
*/

gsap.to(".el", {
  backgroundPosition: "200% center",
  duration: 3,
  ease: "none",
  repeat: -1
});`,
    html: `<p class="p-text" style="font-size:1.3rem;font-weight:800;background:linear-gradient(90deg,#00d4aa,#7c3aed,#ff6b6b,#00d4aa);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:2px;">GRADIENT</p>`,
    animate(c) {
      return gsap.to(c.querySelector('.p-text'), {
        backgroundPosition: '200% center', duration: 3, ease: 'none', repeat: -1
      });
    }
  },

  {
    id: 'highlight-sweep', category: 'text',
    title: 'Highlight Sweep',
    desc: 'A light sweep passes across text — like a surface reflection.',
    tags: ['highlight', 'sweep', 'shine', 'reflection', 'overlay'],
    code: `/* Overlay div with gradient positioned over text */
gsap.fromTo(".sweep", {
  x: "-120%"
}, {
  x: "220%",
  duration: 1.5,
  ease: "power1.inOut",
  repeat: -1,
  repeatDelay: 1
});`,
    html: `<div style="position:relative;overflow:hidden;padding:4px 0;"><p class="p-text" style="font-size:1.2rem;font-weight:800;letter-spacing:2px;position:relative;z-index:1;">SHINE</p><div class="hl-sweep" style="position:absolute;top:0;left:0;width:60%;height:100%;background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.35) 50%,transparent 100%);transform:translateX(-120%);pointer-events:none;z-index:2;"></div></div>`,
    animate(c) {
      return gsap.fromTo(c.querySelector('.hl-sweep'), { x: '-120%' }, { x: '220%', duration: 1.5, ease: 'power1.inOut', repeat: -1, repeatDelay: 1 });
    }
  },

  {
    id: 'slot-machine', category: 'text',
    title: 'Slot Machine',
    desc: 'ScrambleText with digit chars creates a slot machine reveal.',
    tags: ['ScrambleText', 'slot', 'digits', 'scramble', 'numbers'],
    code: `const tl = gsap.timeline({ repeat: -1 });
const words = ["12345", "67890", "PRIZE", "!GSAP"];

words.forEach(word => {
  tl.to(".el", {
    duration: 1,
    scrambleText: { text: word, chars: "0123456789", speed: 0.4 }
  }).to({}, { duration: 0.35 });
});`,
    html: `<p class="p-text" style="font-size:1.2rem;font-weight:700;font-family:monospace;letter-spacing:3px;">SLOTS</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const tl = gsap.timeline({ repeat: -1 });
      ['12345', '67890', 'PRIZE', '!GSAP'].forEach(w => {
        tl.to(el, { duration: 1, scrambleText: { text: w, chars: '0123456789', speed: 0.4 } })
          .to({}, { duration: 0.35 });
      });
      return tl;
    }
  },

  {
    id: 'matrix-rain', category: 'text',
    title: 'Matrix Decode',
    desc: 'Binary (0/1) scramble chars give a classic Matrix terminal reveal.',
    tags: ['ScrambleText', 'binary', 'matrix', 'decode', '01'],
    code: `const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
const messages = ["DECODE", "MATRIX", "010101"];

messages.forEach(msg => {
  tl.to(".el", {
    duration: 2,
    scrambleText: {
      text: msg,
      chars: "01",
      speed: 0.3,
      revealDelay: 0.4
    }
  }).to({}, { duration: 0.4 });
});`,
    html: `<p class="p-text" style="font-size:1.1rem;font-weight:700;font-family:monospace;color:#00d4aa;letter-spacing:3px;">010101</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });
      ['DECODE', 'MATRIX', '010101'].forEach(msg => {
        tl.to(el, { duration: 2, scrambleText: { text: msg, chars: '01', speed: 0.3, revealDelay: 0.4 } })
          .to({}, { duration: 0.35 });
      });
      return tl;
    }
  },

  {
    id: 'text-shake', category: 'text',
    title: 'Text Shake',
    desc: 'Rapid micro-oscillations for emphasis — ideal for error states.',
    tags: ['shake', 'vibrate', 'x', 'keyframes', 'error', 'attention'],
    code: `gsap.to(".el", {
  keyframes: [
    { x: -6, duration: 0.06 },
    { x:  6, duration: 0.06 },
    { x: -5, duration: 0.06 },
    { x:  5, duration: 0.06 },
    { x: -3, duration: 0.06 },
    { x:  3, duration: 0.06 },
    { x:  0, duration: 0.06 },
  ],
  repeat: -1,
  repeatDelay: 1.2
});`,
    html: `<p class="p-text" style="font-size:1.4rem;font-weight:800;letter-spacing:2px;color:#ff4466;">SHAKE!</p>`,
    animate(c) {
      return gsap.to(c.querySelector('.p-text'), {
        keyframes: [
          { x: -6, duration: 0.055 }, { x: 6, duration: 0.055 },
          { x: -5, duration: 0.055 }, { x: 5, duration: 0.055 },
          { x: -3, duration: 0.055 }, { x: 3, duration: 0.055 },
          { x:  0, duration: 0.055 },
        ],
        repeat: -1, repeatDelay: 1.2
      });
    }
  },

  // ═══ SVG ══════════════════════════════════════════════════════════════
  {
    id: 'draw-path', category: 'svg',
    title: 'DrawSVG Path',
    desc: 'Animate a stroke being drawn along an SVG path.',
    tags: ['DrawSVG', 'stroke', 'path', 'draw', 'svg'],
    code: `gsap.from("#path", {
  drawSVG: 0,
  duration: 2,
  ease: "power2.inOut"
});`,
    html: `<svg class="p-svg" width="140" height="80" viewBox="0 0 140 80" fill="none"><path class="draw-path-el" d="M12,55 C25,10 55,10 70,40 C85,70 115,70 128,25" stroke="#00d4aa" stroke-width="3" stroke-linecap="round" fill="none"/></svg>`,
    animate(c) {
      const path = c.querySelector('.draw-path-el');
      return gsap.fromTo(path, { drawSVG: '0%' }, {
        drawSVG: '100%', duration: 1.8, ease: 'power2.inOut', repeat: -1, yoyo: true, repeatDelay: 0.4
      });
    }
  },

  {
    id: 'draw-check', category: 'svg',
    title: 'DrawSVG Checkmark',
    desc: 'Circle + checkmark stroke revealed in sequence.',
    tags: ['DrawSVG', 'checkmark', 'stroke', 'svg', 'success'],
    code: `const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

tl.fromTo("#circle", { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.7 })
  .fromTo("#check",  { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.4 });`,
    html: `<svg class="p-svg" width="90" height="90" viewBox="0 0 90 90" fill="none"><circle class="check-circle-el" cx="45" cy="45" r="32" stroke="#00d4aa" stroke-width="2.5" fill="none"/><path class="check-mark-el" d="M28 45 L40 57 L62 31" stroke="#00d4aa" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
    animate(c) {
      const circle = c.querySelector('.check-circle-el');
      const mark   = c.querySelector('.check-mark-el');
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });
      tl.fromTo(circle, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.7, ease: 'power2.inOut' })
        .fromTo(mark, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.4, ease: 'power2.out' });
      return tl;
    }
  },

  {
    id: 'morph-svg', category: 'svg',
    title: 'MorphSVG',
    desc: 'Seamlessly morph one SVG shape into another.',
    tags: ['MorphSVG', 'morph', 'shape', 'svg', 'transform'],
    code: `MorphSVGPlugin.convertToPath("circle, polygon");

gsap.to("#shape", {
  morphSVG: "#target",
  duration: 1.5,
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true
});`,
    html: `<svg class="p-svg" width="100" height="100" viewBox="0 0 100 100"><path class="morph-a" d="M50,8 C72,8 92,28 92,50 C92,72 72,92 50,92 C28,92 8,72 8,50 C8,28 28,8 50,8 Z" fill="#00d4aa"/><path class="morph-b" d="M50,4 L62,34 L95,34 L69,54 L79,88 L50,68 L21,88 L31,54 L5,34 L38,34 Z" fill="#00d4aa" style="display:none"/></svg>`,
    animate(c) {
      const a = c.querySelector('.morph-a');
      const b = c.querySelector('.morph-b');
      return gsap.to(a, {
        morphSVG: b, duration: 1.5, ease: 'power2.inOut', repeat: -1, yoyo: true, repeatDelay: 0.3
      });
    }
  },

  {
    id: 'motion-path', category: 'svg',
    title: 'Motion Path',
    desc: 'Move an element along a custom SVG curve.',
    tags: ['MotionPath', 'path', 'motion', 'svg', 'along'],
    code: `gsap.to(".dot", {
  motionPath: {
    path: "#track",
    align: "#track",
    alignOrigin: [0.5, 0.5],
    autoRotate: true
  },
  duration: 3,
  ease: "none",
  repeat: -1
});`,
    html: `<svg class="p-svg" width="150" height="85" viewBox="0 0 150 85" fill="none"><path class="mp-track" d="M12,55 C20,12 55,12 75,42 C95,72 130,72 138,30" stroke="#1a1a2e" stroke-width="2" stroke-dasharray="5 4"/><circle class="mp-dot" cx="0" cy="0" r="8" fill="#00d4aa"/></svg>`,
    animate(c) {
      const track = c.querySelector('.mp-track');
      const dot   = c.querySelector('.mp-dot');
      return gsap.to(dot, {
        motionPath: { path: track, align: track, alignOrigin: [0.5, 0.5], autoRotate: true },
        duration: 2.5, ease: 'none', repeat: -1
      });
    }
  },

  // ═══ LAYOUT ══════════════════════════════════════════════════════════
  {
    id: 'flip-layout', category: 'layout',
    title: 'FLIP Transition',
    desc: 'Flip.getState() → DOM change → Flip.from() for layout animation.',
    tags: ['Flip', 'layout', 'FLIP', 'state', 'reorder'],
    code: `// Capture state before DOM change
const state = Flip.getState(".items");

// Apply layout change (class, reorder, etc.)
container.classList.toggle("expanded");

// Animate from old → new state
Flip.from(state, {
  duration: 0.7,
  ease: "power2.inOut",
  stagger: 0.06
});`,
    html: `<div class="p-flip-grid"><div class="p-flip-item"></div><div class="p-flip-item"></div><div class="p-flip-item"></div><div class="p-flip-item"></div></div>`,
    animate(c) {
      const grid  = c.querySelector('.p-flip-grid');
      const items = c.querySelectorAll('.p-flip-item');
      let expanded = false;
      let flipAnim = null;
      let dt = null;
      const toggle = () => {
        const state = Flip.getState(items);
        expanded = !expanded;
        if (expanded) {
          grid.style.flexDirection = 'row';
          items.forEach(i => { i.style.width = '18px'; i.style.height = '18px'; i.style.borderRadius = '50%'; });
        } else {
          grid.style.flexDirection = 'column';
          items.forEach(i => { i.style.width = '80px'; i.style.height = '13px'; i.style.borderRadius = '4px'; });
        }
        flipAnim = Flip.from(state, {
          duration: 0.7, ease: 'power2.inOut', stagger: 0.06,
          onComplete: () => { dt = gsap.delayedCall(1.2, toggle); }
        });
      };
      dt = gsap.delayedCall(0.5, toggle);
      return { pause() { flipAnim?.pause(); dt?.kill(); }, resume() { flipAnim?.resume(); if (!flipAnim?.isActive()) dt = gsap.delayedCall(0.3, toggle); } };
    }
  },

  {
    id: 'card-3d', category: 'layout',
    title: '3D Card Flip',
    desc: 'rotationY with perspective for a true 3D card turn.',
    tags: ['rotationY', '3d', 'perspective', 'flip', 'card'],
    code: `gsap.from(".card", {
  rotationY: 90,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  transformPerspective: 800
});

// Continuous spin:
gsap.to(".card", {
  rotationY: 360,
  duration: 3,
  ease: "none",
  repeat: -1
});`,
    html: `<div class="p-card3d">FRONT</div>`,
    animate(c) {
      return gsap.to(c.querySelector('.p-card3d'), {
        rotationY: 360, duration: 3, ease: 'none', repeat: -1, transformPerspective: 800
      });
    }
  },

  {
    id: 'parallax', category: 'layout',
    title: 'Parallax Layers',
    desc: 'Multiple elements move at different speeds for depth.',
    tags: ['parallax', 'layers', 'depth', 'y'],
    code: `// Different y offsets per layer create parallax depth
gsap.to(".layer-back",  { y: -15, duration: 2, ease: "power2.inOut", yoyo: true, repeat: -1 });
gsap.to(".layer-mid",   { y: -28, duration: 2, ease: "power2.inOut", yoyo: true, repeat: -1 });
gsap.to(".layer-front", { y: -45, duration: 2, ease: "power2.inOut", yoyo: true, repeat: -1 });`,
    html: `<div style="position:relative;width:110px;height:80px;"><div style="position:absolute;bottom:0;width:100%;height:28px;background:rgba(124,58,237,0.3);border-radius:5px;" class="pl-1"></div><div style="position:absolute;bottom:0;width:75%;left:12%;height:44px;background:rgba(124,58,237,0.5);border-radius:5px;" class="pl-2"></div><div style="position:absolute;bottom:0;width:40%;left:30%;height:62px;background:rgba(0,212,170,0.7);border-radius:5px;" class="pl-3"></div></div>`,
    animate(c) {
      return [
        gsap.to(c.querySelector('.pl-1'), { y: -12, duration: 2, ease: 'power2.inOut', yoyo: true, repeat: -1 }),
        gsap.to(c.querySelector('.pl-2'), { y: -24, duration: 2, ease: 'power2.inOut', yoyo: true, repeat: -1 }),
        gsap.to(c.querySelector('.pl-3'), { y: -40, duration: 2, ease: 'power2.inOut', yoyo: true, repeat: -1 }),
      ];
    }
  },

  // ═══ MISC ════════════════════════════════════════════════════════════
  {
    id: 'draggable', category: 'misc',
    title: 'Draggable + Inertia',
    desc: 'Drag with momentum via Draggable and InertiaPlugin.',
    tags: ['Draggable', 'InertiaPlugin', 'drag', 'inertia', 'interactive'],
    code: `import { Draggable }     from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
gsap.registerPlugin(Draggable, InertiaPlugin);

Draggable.create(".el", {
  type: "x,y",
  bounds: "#container",
  inertia: true,
  onDragEnd() {
    console.log("dropped at", this.x, this.y);
  }
});`,
    html: `<span class="p-drag-hint">drag me</span><div class="p-circle" style="width:44px;height:44px;cursor:grab;"></div>`,
    animate(c) {
      const dot = c.querySelector('.p-circle');
      Draggable.create(dot, { type: 'x,y', bounds: c, inertia: true });
      return null;
    }
  },

  {
    id: 'yoyo', category: 'misc',
    title: 'Yoyo Repeat',
    desc: 'yoyo:true plays the animation forward then backwards.',
    tags: ['yoyo', 'repeat', 'loop', 'back-forth'],
    code: `gsap.to(".el", {
  x: 80,
  scale: 1.2,
  duration: 0.8,
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true
});`,
    html: `<div class="p-circle" style="width:30px;height:30px;"></div>`,
    animate(c) {
      return gsap.to(c.querySelector('.p-circle'), {
        x: 52, scale: 1.2, duration: 0.8, ease: 'power2.inOut', repeat: -1, yoyo: true
      });
    }
  },

  {
    id: 'keyframes-anim', category: 'misc',
    title: 'Keyframes',
    desc: 'Multi-step animations defined inline with keyframes array.',
    tags: ['keyframes', 'multi-step', 'sequence'],
    code: `gsap.to(".el", {
  keyframes: [
    { y: -50, duration: 0.4, ease: "power2.out" },
    { y: 0,   duration: 0.5, ease: "bounce.out" },
    { scaleX: 1.4, scaleY: 0.6, duration: 0.15 },
    { scale: 1, duration: 0.25, ease: "elastic.out(2, 0.5)" }
  ],
  repeat: -1,
  repeatDelay: 0.5
});`,
    html: `<div class="p-circle" style="width:38px;height:38px;"></div>`,
    animate(c) {
      return gsap.to(c.querySelector('.p-circle'), {
        keyframes: [
          { y: -48, duration: 0.38, ease: 'power2.out' },
          { y: 0, duration: 0.45, ease: 'bounce.out' },
          { scaleX: 1.4, scaleY: 0.6, duration: 0.14 },
          { scale: 1, duration: 0.24, ease: 'elastic.out(2, 0.5)' }
        ],
        repeat: -1, repeatDelay: 0.5
      });
    }
  },

  {
    id: 'counter', category: 'misc',
    title: 'Number Counter',
    desc: 'Animate a number value and update DOM via onUpdate.',
    tags: ['counter', 'number', 'onUpdate', 'count'],
    code: `const obj = { val: 0 };

gsap.to(obj, {
  val: 1000,
  duration: 2,
  ease: "power2.out",
  onUpdate() {
    el.textContent = Math.round(obj.val).toLocaleString();
  }
});`,
    html: `<p class="p-text" style="font-size:2.2rem;font-weight:800;font-family:monospace;">0</p>`,
    animate(c) {
      const el = c.querySelector('.p-text');
      const obj = { val: 0 };
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(obj, {
        val: 1000, duration: 1.8, ease: 'power2.out',
        onUpdate: () => { el.textContent = Math.round(obj.val).toLocaleString(); }
      })
      .to(obj, {
        val: 0, duration: 0.05, delay: 0.7,
        onUpdate: () => { el.textContent = '0'; }
      });
      return tl;
    }
  },

  {
    id: 'color-anim', category: 'misc',
    title: 'Color Animation',
    desc: 'GSAP smoothly interpolates between colors.',
    tags: ['color', 'backgroundColor', 'gradient', 'interpolate'],
    code: `gsap.to(".el", {
  backgroundColor: "#7c3aed",
  boxShadow: "0 0 30px #7c3aed",
  duration: 1.5,
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true
});`,
    html: `<div class="p-box" style="display:flex;align-items:center;justify-content:center;"><span style="font-size:0.55rem;color:rgba(0,0,0,0.5);font-weight:800;letter-spacing:1px;">COLOR</span></div>`,
    animate(c) {
      return gsap.to(c.querySelector('.p-box'), {
        backgroundColor: '#7c3aed',
        boxShadow: '0 0 28px rgba(124,58,237,0.7)',
        duration: 1.5, ease: 'power2.inOut', repeat: -1, yoyo: true
      });
    }
  },

  {
    id: 'glow-pulse', category: 'misc',
    title: 'Glow Pulse',
    desc: 'Pulsing box-shadow glow — great for CTAs and highlights.',
    tags: ['glow', 'pulse', 'boxShadow', 'attention'],
    code: `gsap.to(".el", {
  boxShadow: "0 0 40px #00d4aa, 0 0 80px rgba(0,212,170,0.3)",
  scale: 1.05,
  duration: 1,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true
});`,
    html: `<div class="p-box" style="border-radius:50%;"></div>`,
    animate(c) {
      return gsap.to(c.querySelector('.p-box'), {
        boxShadow: '0 0 35px #00d4aa, 0 0 70px rgba(0,212,170,0.3)',
        scale: 1.1,
        duration: 1, ease: 'power1.inOut', repeat: -1, yoyo: true
      });
    }
  },

  // ═══ PAGE TRANSITIONS ════════════════════════════════════════════════

  {
    id: 'trans-fade', category: 'transitions',
    title: 'Cross Fade',
    desc: 'Page A fades out while page B fades in — the simplest transition.',
    tags: ['fade', 'opacity', 'crossfade', 'transition'],
    code: `// Page leave
gsap.to(pageA, { opacity: 0, duration: 0.5, ease: "power1.in" });
// Page enter
gsap.from(pageB, { opacity: 0, duration: 0.5, ease: "power1.out", delay: 0.5 });`,
    html: `<div class="trans-screen"><div class="trans-page trans-page-a"><div class="trans-mock"></div><div class="trans-bar"></div></div><div class="trans-page trans-page-b" style="opacity:0"><div class="trans-mock"></div><div class="trans-bar trans-bar-b"></div></div></div>`,
    animate(c) {
      const a = c.querySelector('.trans-page-a');
      const b = c.querySelector('.trans-page-b');
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
      tl.to(a, { opacity: 0, duration: 0.6, ease: 'power1.in' })
        .to(b, { opacity: 1, duration: 0.6, ease: 'power1.out' }, '-=0.1')
        .to({}, { duration: 0.8 })
        .to(b, { opacity: 0, duration: 0.6, ease: 'power1.in' })
        .to(a, { opacity: 1, duration: 0.6, ease: 'power1.out' }, '-=0.1');
      return tl;
    }
  },

  {
    id: 'trans-slide-h', category: 'transitions',
    title: 'Slide Horizontal',
    desc: 'Both pages move left together — page B pushes page A out.',
    tags: ['slide', 'push', 'x', 'horizontal', 'transition'],
    code: `const tl = gsap.timeline();
tl.to(pageA, { x: "-100%", duration: 0.6, ease: "power2.inOut" })
  .from(pageB, { x: "100%", duration: 0.6, ease: "power2.inOut" }, 0);`,
    html: `<div class="trans-screen" style="overflow:hidden"><div class="trans-page trans-page-a" style="position:absolute;inset:0"><div class="trans-mock"></div><div class="trans-bar"></div></div><div class="trans-page trans-page-b" style="position:absolute;inset:0;transform:translateX(100%)"><div class="trans-mock"></div><div class="trans-bar trans-bar-b"></div></div></div>`,
    animate(c) {
      const a = c.querySelector('.trans-page-a');
      const b = c.querySelector('.trans-page-b');
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });
      tl.to(a, { x: '-100%', duration: 0.6, ease: 'power2.inOut' })
        .to(b, { x: '0%', duration: 0.6, ease: 'power2.inOut' }, 0)
        .to({}, { duration: 0.8 })
        .to(b, { x: '100%', duration: 0.6, ease: 'power2.inOut' })
        .to(a, { x: '0%', duration: 0.6, ease: 'power2.inOut' }, '-=0.6');
      return tl;
    }
  },

  {
    id: 'trans-slide-v', category: 'transitions',
    title: 'Slide Vertical',
    desc: 'Page B slides up from below, pushing page A upward.',
    tags: ['slide', 'push', 'y', 'vertical', 'transition'],
    code: `const tl = gsap.timeline();
tl.to(pageA, { y: "-100%", duration: 0.6, ease: "power2.inOut" })
  .from(pageB, { y: "100%", duration: 0.6, ease: "power2.inOut" }, 0);`,
    html: `<div class="trans-screen" style="overflow:hidden"><div class="trans-page trans-page-a" style="position:absolute;inset:0"><div class="trans-mock"></div><div class="trans-bar"></div></div><div class="trans-page trans-page-b" style="position:absolute;inset:0;transform:translateY(100%)"><div class="trans-mock"></div><div class="trans-bar trans-bar-b"></div></div></div>`,
    animate(c) {
      const a = c.querySelector('.trans-page-a');
      const b = c.querySelector('.trans-page-b');
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });
      tl.to(a, { y: '-100%', duration: 0.6, ease: 'power2.inOut' })
        .to(b, { y: '0%', duration: 0.6, ease: 'power2.inOut' }, 0)
        .to({}, { duration: 0.8 })
        .to(b, { y: '100%', duration: 0.6, ease: 'power2.inOut' })
        .to(a, { y: '0%', duration: 0.6, ease: 'power2.inOut' }, '-=0.6');
      return tl;
    }
  },

  {
    id: 'trans-wipe', category: 'transitions',
    title: 'Clip Wipe',
    desc: 'A clip-path wipe reveals page B from left to right.',
    tags: ['clip', 'wipe', 'clipPath', 'reveal', 'transition'],
    code: `gsap.fromTo(pageB,
  { clipPath: "inset(0 100% 0 0)" },
  { clipPath: "inset(0 0% 0 0)", duration: 0.7, ease: "power2.inOut" }
);`,
    html: `<div class="trans-screen" style="overflow:hidden;position:relative"><div class="trans-page trans-page-a" style="position:absolute;inset:0"><div class="trans-mock"></div><div class="trans-bar"></div></div><div class="trans-page trans-page-b" style="position:absolute;inset:0;clip-path:inset(0 100% 0 0)"><div class="trans-mock"></div><div class="trans-bar trans-bar-b"></div></div></div>`,
    animate(c) {
      const b = c.querySelector('.trans-page-b');
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.7 });
      tl.fromTo(b,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 0.7, ease: 'power2.inOut' }
      )
      .to({}, { duration: 0.9 })
      .to(b, { clipPath: 'inset(0 0% 0 100%)', duration: 0.7, ease: 'power2.inOut' })
      .set(b, { clipPath: 'inset(0 100% 0 0)' });
      return tl;
    }
  },

  {
    id: 'trans-curtain', category: 'transitions',
    title: 'Curtain Overlay',
    desc: 'A solid overlay slides in, hides the swap, then slides out.',
    tags: ['curtain', 'overlay', 'transition', 'slide'],
    code: `const overlay = document.createElement("div");
// position: fixed, full screen, colored background
const tl = gsap.timeline();
tl.from(overlay, { x: "-100%", duration: 0.45, ease: "power2.in" })
  .call(() => swapPages())
  .to(overlay, { x: "100%", duration: 0.45, ease: "power2.out" });`,
    html: `<div class="trans-screen" style="overflow:hidden;position:relative"><div class="trans-page trans-page-a" style="position:absolute;inset:0"><div class="trans-mock"></div><div class="trans-bar"></div></div><div class="trans-page trans-page-b" style="position:absolute;inset:0;opacity:0"><div class="trans-mock"></div><div class="trans-bar trans-bar-b"></div></div><div class="trans-overlay" style="position:absolute;inset:0;background:#00d4aa;transform:translateX(-100%)"></div></div>`,
    animate(c) {
      const a = c.querySelector('.trans-page-a');
      const b = c.querySelector('.trans-page-b');
      const ov = c.querySelector('.trans-overlay');
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });
      tl.to(ov, { x: '0%', duration: 0.4, ease: 'power2.in' })
        .set(a, { opacity: 0 })
        .set(b, { opacity: 1 })
        .to(ov, { x: '100%', duration: 0.4, ease: 'power2.out' })
        .to({}, { duration: 0.9 })
        .to(ov, { x: '0%', duration: 0.4, ease: 'power2.in' })
        .set(b, { opacity: 0 })
        .set(a, { opacity: 1 })
        .to(ov, { x: '100%', duration: 0.4, ease: 'power2.out' })
        .set(ov, { x: '-100%' });
      return tl;
    }
  },

  {
    id: 'trans-split', category: 'transitions',
    title: 'Split Curtains',
    desc: 'Two curtain halves close from top/bottom, swap, then part again.',
    tags: ['split', 'curtain', 'halves', 'transition'],
    code: `const tl = gsap.timeline();
tl.to(topCurtain,    { y: "50%", duration: 0.45, ease: "power2.in" })
  .to(bottomCurtain, { y: "-50%", duration: 0.45, ease: "power2.in" }, 0)
  .call(() => swapPages())
  .to(topCurtain,    { y: "-100%", duration: 0.45, ease: "power2.out" })
  .to(bottomCurtain, { y: "100%",  duration: 0.45, ease: "power2.out" }, "-=0.45");`,
    html: `<div class="trans-screen" style="overflow:hidden;position:relative"><div class="trans-page trans-page-a" style="position:absolute;inset:0"><div class="trans-mock"></div><div class="trans-bar"></div></div><div class="trans-page trans-page-b" style="position:absolute;inset:0;opacity:0"><div class="trans-mock"></div><div class="trans-bar trans-bar-b"></div></div><div style="position:absolute;left:0;right:0;top:0;height:50%;background:#7c3aed;transform:translateY(-100%);" class="curtain-top"></div><div style="position:absolute;left:0;right:0;bottom:0;height:50%;background:#7c3aed;transform:translateY(100%);" class="curtain-bot"></div></div>`,
    animate(c) {
      const a = c.querySelector('.trans-page-a');
      const b = c.querySelector('.trans-page-b');
      const top = c.querySelector('.curtain-top');
      const bot = c.querySelector('.curtain-bot');
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });
      tl.to(top, { y: '0%', duration: 0.4, ease: 'power2.in' })
        .to(bot, { y: '0%', duration: 0.4, ease: 'power2.in' }, 0)
        .set(a, { opacity: 0 }).set(b, { opacity: 1 })
        .to(top, { y: '-100%', duration: 0.4, ease: 'power2.out' })
        .to(bot, { y: '100%', duration: 0.4, ease: 'power2.out' }, '-=0.4')
        .to({}, { duration: 0.9 })
        .to(top, { y: '0%', duration: 0.4, ease: 'power2.in' })
        .to(bot, { y: '0%', duration: 0.4, ease: 'power2.in' }, '-=0.4')
        .set(b, { opacity: 0 }).set(a, { opacity: 1 })
        .to(top, { y: '-100%', duration: 0.4, ease: 'power2.out' })
        .to(bot, { y: '100%', duration: 0.4, ease: 'power2.out' }, '-=0.4');
      return tl;
    }
  },

  {
    id: 'trans-circle', category: 'transitions',
    title: 'Circle Reveal',
    desc: 'A circular clip-path expands from center to reveal the new page.',
    tags: ['circle', 'clip', 'reveal', 'radial', 'transition'],
    code: `gsap.fromTo(pageB,
  { clipPath: "circle(0% at 50% 50%)" },
  { clipPath: "circle(75% at 50% 50%)", duration: 0.7, ease: "power2.inOut" }
);`,
    html: `<div class="trans-screen" style="overflow:hidden;position:relative"><div class="trans-page trans-page-a" style="position:absolute;inset:0"><div class="trans-mock"></div><div class="trans-bar"></div></div><div class="trans-page trans-page-b" style="position:absolute;inset:0;clip-path:circle(0% at 50% 50%)"><div class="trans-mock"></div><div class="trans-bar trans-bar-b"></div></div></div>`,
    animate(c) {
      const b = c.querySelector('.trans-page-b');
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.7 });
      tl.fromTo(b,
        { clipPath: 'circle(0% at 50% 50%)' },
        { clipPath: 'circle(75% at 50% 50%)', duration: 0.7, ease: 'power2.inOut' }
      )
      .to({}, { duration: 0.9 })
      .to(b, { clipPath: 'circle(0% at 50% 50%)', duration: 0.7, ease: 'power2.inOut' });
      return tl;
    }
  },

  {
    id: 'trans-scale', category: 'transitions',
    title: 'Scale Zoom',
    desc: 'Page A scales up and fades as page B scales in from small.',
    tags: ['scale', 'zoom', 'transition', 'opacity'],
    code: `const tl = gsap.timeline();
tl.to(pageA, { scale: 1.15, opacity: 0, duration: 0.5, ease: "power2.in" })
  .from(pageB, { scale: 0.85, opacity: 0, duration: 0.5, ease: "power2.out" });`,
    html: `<div class="trans-screen" style="overflow:hidden;position:relative"><div class="trans-page trans-page-a" style="position:absolute;inset:0"><div class="trans-mock"></div><div class="trans-bar"></div></div><div class="trans-page trans-page-b" style="position:absolute;inset:0;opacity:0;transform:scale(0.85)"><div class="trans-mock"></div><div class="trans-bar trans-bar-b"></div></div></div>`,
    animate(c) {
      const a = c.querySelector('.trans-page-a');
      const b = c.querySelector('.trans-page-b');
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
      tl.to(a, { scale: 1.1, opacity: 0, duration: 0.5, ease: 'power2.in' })
        .fromTo(b, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
        .to({}, { duration: 0.8 })
        .to(b, { scale: 1.1, opacity: 0, duration: 0.5, ease: 'power2.in' })
        .fromTo(a, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1');
      return tl;
    }
  },

  {
    id: 'trans-flip', category: 'transitions',
    title: '3D Flip',
    desc: 'A 3D rotationY flip — page A faces away, page B faces forward.',
    tags: ['3d', 'flip', 'rotationY', 'perspective', 'transition'],
    code: `const tl = gsap.timeline();
tl.to(pageA, { rotationY: 90, opacity: 0, duration: 0.4, ease: "power2.in" })
  .set(pageB, { rotationY: -90, opacity: 1 })
  .to(pageB, { rotationY: 0, duration: 0.4, ease: "power2.out" });`,
    html: `<div class="trans-screen" style="overflow:hidden;position:relative;perspective:600px"><div class="trans-page trans-page-a" style="position:absolute;inset:0;backface-visibility:hidden"><div class="trans-mock"></div><div class="trans-bar"></div></div><div class="trans-page trans-page-b" style="position:absolute;inset:0;opacity:0;backface-visibility:hidden"><div class="trans-mock"></div><div class="trans-bar trans-bar-b"></div></div></div>`,
    animate(c) {
      const a = c.querySelector('.trans-page-a');
      const b = c.querySelector('.trans-page-b');
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
      tl.to(a, { rotationY: 90, opacity: 0, duration: 0.4, ease: 'power2.in' })
        .set(b, { rotationY: -90, opacity: 1 })
        .to(b, { rotationY: 0, duration: 0.4, ease: 'power2.out' })
        .to({}, { duration: 0.9 })
        .to(b, { rotationY: 90, opacity: 0, duration: 0.4, ease: 'power2.in' })
        .set(a, { rotationY: -90, opacity: 1 })
        .to(a, { rotationY: 0, duration: 0.4, ease: 'power2.out' });
      return tl;
    }
  },

  {
    id: 'trans-blocks', category: 'transitions',
    title: 'Block Stagger',
    desc: 'A grid of blocks staggers in to cover the page, then staggers out.',
    tags: ['stagger', 'grid', 'blocks', 'transition'],
    code: `// Create a grid of div blocks over the viewport
gsap.timeline()
  .to(blocks, {
    scaleY: 1, duration: 0.4, ease: "power2.in",
    stagger: { amount: 0.4, from: "start" }
  })
  .call(() => swapPages())
  .to(blocks, {
    scaleY: 0, duration: 0.4, ease: "power2.out",
    stagger: { amount: 0.4, from: "end" }
  });`,
    html: `<div class="trans-screen" style="overflow:hidden;position:relative"><div class="trans-page trans-page-a" style="position:absolute;inset:0"><div class="trans-mock"></div><div class="trans-bar"></div></div><div class="trans-page trans-page-b" style="position:absolute;inset:0;opacity:0"><div class="trans-mock"></div><div class="trans-bar trans-bar-b"></div></div><div class="trans-block-grid" style="position:absolute;inset:0;display:grid;grid-template-columns:repeat(5,1fr)"><div class="trans-block"></div><div class="trans-block"></div><div class="trans-block"></div><div class="trans-block"></div><div class="trans-block"></div></div></div>`,
    animate(c) {
      const a = c.querySelector('.trans-page-a');
      const b = c.querySelector('.trans-page-b');
      const blocks = c.querySelectorAll('.trans-block');
      gsap.set(blocks, { scaleY: 0, transformOrigin: 'top center' });
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });
      tl.to(blocks, { scaleY: 1, duration: 0.4, ease: 'power2.in', stagger: { amount: 0.3, from: 'start' } })
        .set(a, { opacity: 0 }).set(b, { opacity: 1 })
        .to(blocks, { scaleY: 0, duration: 0.35, ease: 'power2.out', stagger: { amount: 0.3, from: 'end' }, transformOrigin: 'bottom center' })
        .to({}, { duration: 0.8 })
        .set(blocks, { transformOrigin: 'top center' })
        .to(blocks, { scaleY: 1, duration: 0.4, ease: 'power2.in', stagger: { amount: 0.3, from: 'start' } })
        .set(b, { opacity: 0 }).set(a, { opacity: 1 })
        .to(blocks, { scaleY: 0, duration: 0.35, ease: 'power2.out', stagger: { amount: 0.3, from: 'end' }, transformOrigin: 'bottom center' })
        .set(blocks, { transformOrigin: 'top center' });
      return tl;
    }
  },

  {
    id: 'trans-diagonal', category: 'transitions',
    title: 'Diagonal Sweep',
    desc: 'An angled overlay sweeps across the screen to mask the transition.',
    tags: ['diagonal', 'sweep', 'skew', 'transition'],
    code: `const overlay = document.createElement("div");
// position: fixed, skewX(-10deg), full height, colored
const tl = gsap.timeline();
tl.fromTo(overlay, { x: "-110%" }, { x: "0%", duration: 0.45, ease: "power2.in" })
  .call(() => swapPages())
  .to(overlay, { x: "110%", duration: 0.45, ease: "power2.out" });`,
    html: `<div class="trans-screen" style="overflow:hidden;position:relative"><div class="trans-page trans-page-a" style="position:absolute;inset:0"><div class="trans-mock"></div><div class="trans-bar"></div></div><div class="trans-page trans-page-b" style="position:absolute;inset:0;opacity:0"><div class="trans-mock"></div><div class="trans-bar trans-bar-b"></div></div><div style="position:absolute;inset:0;background:linear-gradient(135deg,#00d4aa,#7c3aed);transform:translateX(-110%) skewX(-8deg);width:120%" class="diag-sweep"></div></div>`,
    animate(c) {
      const a = c.querySelector('.trans-page-a');
      const b = c.querySelector('.trans-page-b');
      const sweep = c.querySelector('.diag-sweep');
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
      tl.to(sweep, { x: '0%', duration: 0.4, ease: 'power2.in' })
        .set(a, { opacity: 0 }).set(b, { opacity: 1 })
        .to(sweep, { x: '110%', duration: 0.4, ease: 'power2.out' })
        .to({}, { duration: 0.9 })
        .to(sweep, { x: '0%', duration: 0.4, ease: 'power2.in' })
        .set(b, { opacity: 0 }).set(a, { opacity: 1 })
        .to(sweep, { x: '110%', duration: 0.4, ease: 'power2.out' })
        .set(sweep, { x: '-110%' });
      return tl;
    }
  },

  {
    id: 'trans-zoom-blur', category: 'transitions',
    title: 'Zoom & Blur',
    desc: 'Page A blurs and zooms out; page B sharpens and zooms in.',
    tags: ['zoom', 'blur', 'filter', 'scale', 'transition'],
    code: `const tl = gsap.timeline();
tl.to(pageA, {
    scale: 1.1, filter: "blur(12px)", opacity: 0,
    duration: 0.5, ease: "power2.in"
  })
  .from(pageB, {
    scale: 0.92, filter: "blur(12px)", opacity: 0,
    duration: 0.5, ease: "power2.out"
  });`,
    html: `<div class="trans-screen" style="overflow:hidden;position:relative"><div class="trans-page trans-page-a" style="position:absolute;inset:0"><div class="trans-mock"></div><div class="trans-bar"></div></div><div class="trans-page trans-page-b" style="position:absolute;inset:0;opacity:0;transform:scale(0.92);filter:blur(10px)"><div class="trans-mock"></div><div class="trans-bar trans-bar-b"></div></div></div>`,
    animate(c) {
      const a = c.querySelector('.trans-page-a');
      const b = c.querySelector('.trans-page-b');
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
      tl.to(a, { scale: 1.08, filter: 'blur(10px)', opacity: 0, duration: 0.5, ease: 'power2.in' })
        .fromTo(b, { scale: 0.93, filter: 'blur(10px)', opacity: 0 }, { scale: 1, filter: 'blur(0px)', opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
        .to({}, { duration: 0.8 })
        .to(b, { scale: 1.08, filter: 'blur(10px)', opacity: 0, duration: 0.5, ease: 'power2.in' })
        .fromTo(a, { scale: 0.93, filter: 'blur(10px)', opacity: 0 }, { scale: 1, filter: 'blur(0px)', opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1');
      return tl;
    }
  },

  // ═══ SCROLL ══════════════════════════════════════════════════════════

  {
    id: 'scroll-fade-up', category: 'scroll',
    title: 'Fade Up on Scroll',
    desc: 'Classic entrance: element fades in and rises as it enters the viewport.',
    tags: ['scroll', 'fade', 'scrolltrigger', 'entrance', 'y'],
    code: `gsap.from(".el", {
  scrollTrigger: {
    trigger: ".el",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 50,
  duration: 0.8,
  ease: "power2.out"
});`,
    html: `<div class="sp-wrap"><div class="sp-label">↓ scroll trigger</div><div class="sp-box"></div></div>`,
    animate(c) {
      const box = c.querySelector('.sp-box');
      return gsap.timeline({ repeat: -1, repeatDelay: 0.7 })
        .set(box, { opacity: 0, y: 40 })
        .to(box, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
        .to({}, { duration: 1 })
        .to(box, { opacity: 0, y: -20, duration: 0.4, ease: 'power1.in' });
    }
  },

  {
    id: 'scroll-scale-in', category: 'scroll',
    title: 'Scale In on Scroll',
    desc: 'Element grows from a smaller scale when scrolled into view.',
    tags: ['scroll', 'scale', 'scrolltrigger', 'entrance'],
    code: `gsap.from(".el", {
  scrollTrigger: {
    trigger: ".el",
    start: "top 75%",
    toggleActions: "play none none reverse"
  },
  scale: 0.7,
  opacity: 0,
  duration: 0.7,
  ease: "back.out(1.5)"
});`,
    html: `<div class="sp-wrap"><div class="sp-label">↓ scroll trigger</div><div class="sp-box" style="border-radius:50%"></div></div>`,
    animate(c) {
      const box = c.querySelector('.sp-box');
      return gsap.timeline({ repeat: -1, repeatDelay: 0.7 })
        .set(box, { scale: 0.5, opacity: 0 })
        .to(box, { scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.5)' })
        .to({}, { duration: 1.1 })
        .to(box, { scale: 0.5, opacity: 0, duration: 0.4, ease: 'power1.in' });
    }
  },

  {
    id: 'scroll-clip-reveal', category: 'scroll',
    title: 'Clip Reveal on Scroll',
    desc: 'Content is unmasked from bottom to top using clip-path as you scroll.',
    tags: ['scroll', 'clipPath', 'reveal', 'mask', 'scrolltrigger'],
    code: `gsap.from(".el", {
  scrollTrigger: {
    trigger: ".el",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  clipPath: "inset(100% 0% 0% 0%)",
  duration: 0.9,
  ease: "power3.out"
});`,
    html: `<div class="sp-wrap"><div class="sp-label">↓ scroll trigger</div><div class="sp-card"><div style="width:60%;height:6px;border-radius:3px;background:rgba(255,255,255,0.5)"></div></div></div>`,
    animate(c) {
      const card = c.querySelector('.sp-card');
      return gsap.timeline({ repeat: -1, repeatDelay: 0.7 })
        .set(card, { clipPath: 'inset(100% 0% 0% 0%)' })
        .to(card, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: 'power3.out' })
        .to({}, { duration: 1.1 })
        .to(card, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.5, ease: 'power2.in' });
    }
  },

  {
    id: 'scroll-stagger', category: 'scroll',
    title: 'Stagger on Scroll',
    desc: 'A group of elements staggers in sequentially when the section scrolls into view.',
    tags: ['scroll', 'stagger', 'scrolltrigger', 'entrance', 'group'],
    code: `gsap.from(".items", {
  scrollTrigger: {
    trigger: ".container",
    start: "top 75%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 30,
  stagger: 0.12,
  duration: 0.6,
  ease: "power2.out"
});`,
    html: `<div class="sp-wrap"><div class="sp-label">↓ scroll trigger</div><div class="sp-row"><div class="sp-dot"></div><div class="sp-dot" style="background:var(--accent2)"></div><div class="sp-dot"></div><div class="sp-dot" style="background:var(--accent2)"></div></div></div>`,
    animate(c) {
      const dots = c.querySelectorAll('.sp-dot');
      return gsap.timeline({ repeat: -1, repeatDelay: 0.6 })
        .set(dots, { opacity: 0, y: 18 })
        .to(dots, { opacity: 1, y: 0, stagger: 0.12, duration: 0.5, ease: 'power2.out' })
        .to({}, { duration: 1 })
        .to(dots, { opacity: 0, y: -12, stagger: 0.08, duration: 0.3, ease: 'power1.in' });
    }
  },

  {
    id: 'scroll-scrub', category: 'scroll',
    title: 'Scrub to Scroll',
    desc: 'Animation progress is directly tied to scroll position — scrubs back and forth.',
    tags: ['scroll', 'scrub', 'scrolltrigger', 'progress'],
    code: `gsap.to(".el", {
  scrollTrigger: {
    trigger: ".section",
    start: "top top",
    end: "bottom bottom",
    scrub: 1
  },
  x: 200,
  rotation: 360,
  ease: "none"
});`,
    html: `<div class="sp-wrap"><div class="sp-label">scrubs with scroll</div><div style="width:90%;position:relative;height:24px;display:flex;align-items:center"><div style="width:100%;height:3px;background:rgba(255,255,255,0.1);border-radius:2px;position:relative"><div class="sp-scrub-thumb" style="width:16px;height:16px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--accent2));position:absolute;top:50%;transform:translateY(-50%) translateX(0)"></div></div></div></div>`,
    animate(c) {
      const thumb = c.querySelector('.sp-scrub-thumb');
      const track = thumb.parentElement;
      return gsap.to(thumb, {
        x: track.offsetWidth - 16,
        duration: 2,
        ease: 'none',
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.3
      });
    }
  },

  {
    id: 'scroll-parallax', category: 'scroll',
    title: 'Parallax Layers',
    desc: 'Foreground and background layers move at different speeds, creating depth.',
    tags: ['scroll', 'parallax', 'depth', 'scrolltrigger', 'y'],
    code: `// Background moves slower than content
gsap.to(".bg-layer", {
  scrollTrigger: { trigger: ".section", scrub: true },
  y: -80
});
gsap.to(".fg-layer", {
  scrollTrigger: { trigger: ".section", scrub: true },
  y: -160
});`,
    html: `<div class="sp-wrap"><div class="sp-label">parallax depth</div><div class="sp-layers"><div class="sp-layer sp-layer-a">BG</div><div class="sp-layer sp-layer-b">FG</div></div></div>`,
    animate(c) {
      const bg = c.querySelector('.sp-layer-a');
      const fg = c.querySelector('.sp-layer-b');
      const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.3 });
      tl.to(bg, { y: -14, duration: 1.8, ease: 'none' }, 0)
        .to(fg, { y: -32, duration: 1.8, ease: 'none' }, 0);
      return tl;
    }
  },

  {
    id: 'scroll-counter', category: 'scroll',
    title: 'Count Up on Scroll',
    desc: 'A number animates from zero when scrolled into view — great for stats.',
    tags: ['scroll', 'counter', 'number', 'scrolltrigger', 'text'],
    code: `let obj = { val: 0 };
gsap.to(obj, {
  scrollTrigger: {
    trigger: ".stat",
    start: "top 80%",
    toggleActions: "play none none reset"
  },
  val: 100,
  duration: 1.5,
  ease: "power1.out",
  onUpdate() {
    document.querySelector(".stat").textContent =
      Math.round(obj.val) + "%";
  }
});`,
    html: `<div class="sp-wrap"><div class="sp-label">↓ scroll trigger</div><div class="sp-num" data-counter="0">0%</div></div>`,
    animate(c) {
      const el = c.querySelector('.sp-num');
      const obj = { val: 0 };
      return gsap.timeline({ repeat: -1, repeatDelay: 0.8 })
        .set(obj, { val: 0 })
        .call(() => { obj.val = 0; el.textContent = '0%'; })
        .to(obj, { val: 100, duration: 1.5, ease: 'power1.out', onUpdate: () => { el.textContent = Math.round(obj.val) + '%'; } })
        .to({}, { duration: 0.8 });
    }
  },

  {
    id: 'scroll-text-reveal', category: 'scroll',
    title: 'Text Reveal on Scroll',
    desc: 'SplitText lines slide up from a mask as the section enters the viewport.',
    tags: ['scroll', 'text', 'splittext', 'lines', 'scrolltrigger', 'reveal'],
    code: `const split = SplitText.create(".heading", {
  type: "lines",
  mask: "lines"
});
gsap.from(split.lines, {
  scrollTrigger: {
    trigger: ".heading",
    start: "top 80%",
    toggleActions: "play none none reset"
  },
  yPercent: 100,
  opacity: 0,
  stagger: 0.1,
  duration: 0.7,
  ease: "power3.out"
});`,
    html: `<div class="sp-wrap"><div class="sp-label">↓ scroll trigger</div><div style="display:flex;flex-direction:column;gap:6px;width:80%;overflow:hidden"><div class="sp-bar-h sp-reveal-line" style="width:90%"></div><div class="sp-bar-h sp-reveal-line" style="width:70%"></div><div class="sp-bar-h sp-reveal-line" style="width:80%"></div></div></div>`,
    animate(c) {
      const lines = c.querySelectorAll('.sp-reveal-line');
      return gsap.timeline({ repeat: -1, repeatDelay: 0.7 })
        .set(lines, { yPercent: 110, opacity: 0 })
        .to(lines, { yPercent: 0, opacity: 1, stagger: 0.12, duration: 0.65, ease: 'power3.out' })
        .to({}, { duration: 1 })
        .to(lines, { yPercent: -110, opacity: 0, stagger: 0.08, duration: 0.4, ease: 'power2.in' });
    }
  },

  {
    id: 'scroll-progress-bar', category: 'scroll',
    title: 'Scroll Progress Bar',
    desc: 'A bar fills as the user scrolls down the page — classic reading indicator.',
    tags: ['scroll', 'progress', 'indicator', 'scrolltrigger'],
    code: `gsap.to(".progress-bar", {
  scaleX: 1,
  ease: "none",
  transformOrigin: "left center",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 0
  }
});`,
    html: `<div class="sp-wrap"><div class="sp-label">page scroll progress</div><div class="sp-progress-track"><div class="sp-progress-fill"></div></div></div>`,
    animate(c) {
      const fill = c.querySelector('.sp-progress-fill');
      return gsap.to(fill, { width: '100%', duration: 2.5, ease: 'none', repeat: -1, yoyo: true, repeatDelay: 0.3 });
    }
  },

  {
    id: 'scroll-pin', category: 'scroll',
    title: 'Pin & Animate',
    desc: 'Section pins in place while its content animates — ideal for storytelling.',
    tags: ['scroll', 'pin', 'sticky', 'scrolltrigger', 'timeline'],
    code: `const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section",
    pin: true,
    start: "top top",
    end: "+=600",
    scrub: 1
  }
});
tl.from(".title",  { opacity: 0, y: 40 })
  .from(".subtitle", { opacity: 0, y: 30 })
  .from(".cta",    { opacity: 0, scale: 0.8 });`,
    html: `<div class="sp-wrap"><div class="sp-label">pinned + scrub</div><div style="display:flex;flex-direction:column;align-items:center;gap:7px;width:75%"><div class="sp-bar-h sp-pin-a" style="width:100%;opacity:0"></div><div class="sp-bar-h sp-pin-b" style="width:70%;opacity:0;background:rgba(124,58,237,0.6)"></div><div class="sp-box sp-pin-c" style="width:40px;height:22px;opacity:0"></div></div></div>`,
    animate(c) {
      const [a, b, box] = ['sp-pin-a','sp-pin-b','sp-pin-c'].map(cl => c.querySelector(`.${cl}`));
      return gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
        .set([a,b,box], { opacity: 0, y: 12 })
        .to(a, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
        .to(b, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
        .to(box, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.7)' })
        .to({}, { duration: 0.9 })
        .to([a,b,box], { opacity: 0, duration: 0.4, stagger: 0.08 });
    }
  },

  {
    id: 'scroll-rotate', category: 'scroll',
    title: 'Rotate on Scroll',
    desc: 'Element rotation is scrubbed directly to scroll position.',
    tags: ['scroll', 'rotate', 'scrub', 'scrolltrigger', 'rotation'],
    code: `gsap.to(".el", {
  scrollTrigger: {
    trigger: ".section",
    start: "top center",
    end: "bottom center",
    scrub: 1
  },
  rotation: 360,
  ease: "none"
});`,
    html: `<div class="sp-wrap"><div class="sp-label">scrubs with scroll</div><div class="sp-box" style="width:44px;height:44px;border-radius:10px"></div></div>`,
    animate(c) {
      const box = c.querySelector('.sp-box');
      return gsap.to(box, { rotation: 360, duration: 3, ease: 'none', repeat: -1, repeatDelay: 0.3 });
    }
  },

  {
    id: 'scroll-horizontal', category: 'scroll',
    title: 'Horizontal Scroll',
    desc: 'Vertical scroll drives horizontal panning through a series of panels.',
    tags: ['scroll', 'horizontal', 'panels', 'scrolltrigger', 'x'],
    code: `const panels = gsap.utils.toArray(".panel");
gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: () => "+=" + container.offsetWidth * (panels.length - 1)
  }
});`,
    html: `<div class="sp-wrap" style="overflow:hidden"><div class="sp-label">horizontal scroll panels</div><div style="display:flex;gap:8px;width:220%" class="sp-h-track"><div class="sp-card" style="flex-shrink:0;width:70px">1</div><div class="sp-card" style="flex-shrink:0;width:70px;border-color:rgba(124,58,237,0.4);background:rgba(124,58,237,0.2)">2</div><div class="sp-card" style="flex-shrink:0;width:70px">3</div></div></div>`,
    animate(c) {
      const track = c.querySelector('.sp-h-track');
      return gsap.to(track, { x: -150, duration: 2.5, ease: 'none', repeat: -1, yoyo: true, repeatDelay: 0.4 });
    }
  },

  // ─── Three.js: Shader ────────────────────────────────────────────────
  {
    id: 'thjs-plasma',
    name: 'Plasma Shader',
    cat: 'threejs-shader',
    engine: 'threejs',
    tags: ['shader','plasma','glsl','fragment','colorful'],
    desc: 'Full-screen GLSL plasma shader with animated colour blobs driven by sine/cosine functions.',
    code: `import * as THREE from 'three';
const mat = new THREE.ShaderMaterial({
  uniforms: { time:{value:0}, res:{value:new THREE.Vector2(W,H)} },
  vertexShader: 'void main(){gl_Position=vec4(position,1.0);}',
  fragmentShader: \`
    uniform float time; uniform vec2 res;
    void main(){
      vec2 p=gl_FragCoord.xy/res-.5;
      float v=sin(p.x*8.+time)*cos(p.y*6.+time*.7)
             +sin(length(p)*12.-time*1.2);
      gl_FragColor=vec4(.5+.5*sin(v+time),
        .5+.5*sin(v+time+2.094),
        .5+.5*sin(v+time+4.189),1.);
    }\`,
});
// loop: mat.uniforms.time.value = clock.getElapsedTime();`,
    prompt: `Create a Three.js full-screen plasma shader. Use ShaderMaterial with OrthographicCamera(-1,1,1,-1,0,1) and PlaneGeometry(2,2). Fragment shader produces animated plasma colour blobs using sine/cosine on normalised coords plus a time uniform.`,
    html: '',
    animate(c) {
      const W = c.offsetWidth || 240, H = c.offsetHeight || 160;
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(W, H);
      Object.assign(renderer.domElement.style, { width:'100%', height:'100%', display:'block' });
      c.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1);
      const mat = new THREE.ShaderMaterial({
        uniforms: { time:{value:0}, res:{value:new THREE.Vector2(W,H)} },
        vertexShader: `void main(){gl_Position=vec4(position,1.0);}`,
        fragmentShader: `
          uniform float time; uniform vec2 res;
          void main(){
            vec2 p=gl_FragCoord.xy/res-.5;
            float v=sin(p.x*8.+time)*cos(p.y*6.+time*.7)+sin(length(p)*12.-time*1.2);
            gl_FragColor=vec4(.5+.5*sin(v+time),.5+.5*sin(v+time+2.094),.5+.5*sin(v+time+4.189),1.);
          }`,
      });
      scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2), mat));
      const clock = new THREE.Clock(); let raf;
      const tick = () => { raf=requestAnimationFrame(tick); mat.uniforms.time.value=clock.getElapsedTime(); renderer.render(scene,camera); };
      clock.start(); tick();
      return { pause(){ cancelAnimationFrame(raf); clock.stop(); }, resume(){ clock.start(); tick(); } };
    }
  },
  {
    id: 'thjs-wave-color',
    name: 'Aurora Wave',
    cat: 'threejs-shader',
    engine: 'threejs',
    tags: ['shader','aurora','wave','gradient','glsl'],
    desc: 'Animated aurora-borealis gradient wave using a GLSL fragment shader.',
    code: `const mat = new THREE.ShaderMaterial({
  uniforms: { time:{value:0}, res:{value:new THREE.Vector2(W,H)} },
  vertexShader: 'void main(){gl_Position=vec4(position,1.);}',
  fragmentShader: \`
    uniform float time; uniform vec2 res;
    void main(){
      vec2 uv=gl_FragCoord.xy/res;
      float w1=sin(uv.x*6.28+time*1.5+sin(uv.x*3.+time)*.5)*.5+.5;
      float w2=sin(uv.x*4.+time*1.1+cos(uv.y*5.+time*.8)*.4)*.5+.5;
      vec3 c1=mix(vec3(.05,.2,.8),vec3(.7,.05,.9),w1);
      vec3 c2=mix(vec3(.05,.8,.5),vec3(.9,.4,.1),w2);
      vec3 col=mix(c1,c2,uv.y*.7+.15);
      col+=vec3(.8,.9,1.)*pow(w1*w2,.8)*.3;
      gl_FragColor=vec4(col,1.);
    }\`,
});`,
    prompt: `Create a Three.js aurora wave shader on a full-screen quad. Fragment shader blends two sine-wave colour bands (blues/purples/greens) driven by a time uniform, mixed across UV.y with a bright highlight where the waves intersect.`,
    html: '',
    animate(c) {
      const W = c.offsetWidth||240, H = c.offsetHeight||160;
      const renderer = new THREE.WebGLRenderer({antialias:true});
      renderer.setSize(W,H);
      Object.assign(renderer.domElement.style,{width:'100%',height:'100%',display:'block'});
      c.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1);
      const mat = new THREE.ShaderMaterial({
        uniforms:{time:{value:0},res:{value:new THREE.Vector2(W,H)}},
        vertexShader:`void main(){gl_Position=vec4(position,1.);}`,
        fragmentShader:`
          uniform float time; uniform vec2 res;
          void main(){
            vec2 uv=gl_FragCoord.xy/res;
            float w1=sin(uv.x*6.28+time*1.5+sin(uv.x*3.+time)*.5)*.5+.5;
            float w2=sin(uv.x*4.+time*1.1+cos(uv.y*5.+time*.8)*.4)*.5+.5;
            vec3 c1=mix(vec3(.05,.2,.8),vec3(.7,.05,.9),w1);
            vec3 c2=mix(vec3(.05,.8,.5),vec3(.9,.4,.1),w2);
            vec3 col=mix(c1,c2,uv.y*.7+.15);
            col+=vec3(.8,.9,1.)*pow(w1*w2,.8)*.3;
            gl_FragColor=vec4(col,1.);
          }`,
      });
      scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2),mat));
      const clock=new THREE.Clock(); let raf;
      const tick=()=>{raf=requestAnimationFrame(tick);mat.uniforms.time.value=clock.getElapsedTime();renderer.render(scene,camera);};
      clock.start(); tick();
      return{pause(){cancelAnimationFrame(raf);clock.stop();},resume(){clock.start();tick();}};
    }
  },
  {
    id: 'thjs-hologram',
    name: 'Hologram Grid',
    cat: 'threejs-shader',
    engine: 'threejs',
    tags: ['shader','hologram','grid','scanlines','sci-fi','cyan'],
    desc: 'Sci-fi hologram with animated grid lines, scrolling scanlines, and edge vignette.',
    code: `const mat = new THREE.ShaderMaterial({
  uniforms: { time:{value:0}, res:{value:new THREE.Vector2(W,H)} },
  transparent: true,
  fragmentShader: \`
    uniform float time; uniform vec2 res;
    void main(){
      vec2 uv=gl_FragCoord.xy/res;
      float gx=step(.95,fract(uv.x*22.));
      float gy=step(.95,fract(uv.y*16.));
      float scan=step(.96,fract(uv.y*100.+time*1.5))*.4;
      float edge=smoothstep(.3,.5,max(abs(uv.x-.5),abs(uv.y-.5)));
      float a=(gx*.6+gy*.6+scan)*(1.-edge*.8);
      vec3 col=vec3(.1,.85,.8)*(gx*.8+.2)+vec3(.8,.2,1.)*scan*.5;
      gl_FragColor=vec4(col,a);
    }\`,
});`,
    prompt: `Create a Three.js sci-fi hologram shader. Fragment shader draws cyan grid lines (step on fract(uv*density)), scrolling scanlines (fract(uv.y*100+time)), edge vignette (smoothstep on max(abs(uv.x-0.5),abs(uv.y-0.5))), all transparent over a dark background.`,
    html: '',
    animate(c) {
      const W=c.offsetWidth||240,H=c.offsetHeight||160;
      const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
      renderer.setSize(W,H);
      renderer.setClearColor(0x050510,1);
      Object.assign(renderer.domElement.style,{width:'100%',height:'100%',display:'block'});
      c.appendChild(renderer.domElement);
      const scene=new THREE.Scene();
      const camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1);
      const mat=new THREE.ShaderMaterial({
        uniforms:{time:{value:0},res:{value:new THREE.Vector2(W,H)}},
        transparent:true,
        vertexShader:`void main(){gl_Position=vec4(position,1.);}`,
        fragmentShader:`
          uniform float time; uniform vec2 res;
          void main(){
            vec2 uv=gl_FragCoord.xy/res;
            float gx=step(.95,fract(uv.x*22.));
            float gy=step(.95,fract(uv.y*16.));
            float scan=step(.96,fract(uv.y*100.+time*1.5))*.4;
            float flicker=.9+.1*sin(time*60.);
            float edge=smoothstep(.3,.5,max(abs(uv.x-.5),abs(uv.y-.5)));
            float a=(gx*.6+gy*.6+scan)*(1.-edge*.8)*flicker;
            vec3 col=vec3(.1,.85,.8)*(gx*.8+.2)+vec3(.8,.2,1.)*scan*.5;
            gl_FragColor=vec4(col,a);
          }`,
      });
      scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2),mat));
      const clock=new THREE.Clock();let raf;
      const tick=()=>{raf=requestAnimationFrame(tick);mat.uniforms.time.value=clock.getElapsedTime();renderer.render(scene,camera);};
      clock.start();tick();
      return{pause(){cancelAnimationFrame(raf);clock.stop();},resume(){clock.start();tick();}};
    }
  },
  {
    id: 'thjs-glitch',
    name: 'Glitch Shader',
    cat: 'threejs-shader',
    engine: 'threejs',
    tags: ['shader','glitch','rgb-split','vhs','distortion'],
    desc: 'VHS glitch shader — random horizontal tears with RGB chromatic-aberration split.',
    code: `const mat = new THREE.ShaderMaterial({
  uniforms: { time:{value:0}, tex:{value:texture}, res:{value:new THREE.Vector2(W,H)} },
  fragmentShader: \`
    uniform float time; uniform sampler2D tex; uniform vec2 res;
    float rand(float n){return fract(sin(n)*43758.5);}
    void main(){
      vec2 uv=gl_FragCoord.xy/res;
      float row=floor(uv.y*40.);
      float g=step(.88,rand(row+floor(time*10.)));
      float shift=g*(rand(row+time)-.5)*.08;
      float cr=g*rand(time+1.)*.006;
      vec4 r=texture2D(tex,vec2(uv.x+shift+cr,uv.y));
      vec4 gr=texture2D(tex,vec2(uv.x+shift,uv.y));
      vec4 b=texture2D(tex,vec2(uv.x+shift-cr,uv.y));
      gl_FragColor=vec4(r.r,gr.g,b.b,1.);
    }\`,
});`,
    prompt: `Create a Three.js VHS glitch shader. Draw text onto a CanvasTexture as the source. Fragment shader: rand() keyed on scanline row + floor(time*speed) triggers random horizontal shifts and RGB chromatic aberration on affected rows. Each colour channel samples at a slightly different X offset.`,
    html: '',
    animate(c) {
      const W=c.offsetWidth||240,H=c.offsetHeight||160;
      const renderer=new THREE.WebGLRenderer({antialias:true});
      renderer.setSize(W,H);
      Object.assign(renderer.domElement.style,{width:'100%',height:'100%',display:'block'});
      c.appendChild(renderer.domElement);
      const scene=new THREE.Scene();
      const camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1);
      const tc=document.createElement('canvas');tc.width=W;tc.height=H;
      const tx=tc.getContext('2d');
      const grad=tx.createLinearGradient(0,0,W,H);
      grad.addColorStop(0,'#1a0533');grad.addColorStop(.5,'#0d2b45');grad.addColorStop(1,'#0a1628');
      tx.fillStyle=grad;tx.fillRect(0,0,W,H);
      tx.font=`bold ${Math.floor(H*.35)}px monospace`;tx.textAlign='center';tx.textBaseline='middle';
      tx.fillStyle='rgba(255,255,255,0.9)';tx.fillText('GLITCH',W/2,H/2);
      const mat=new THREE.ShaderMaterial({
        uniforms:{time:{value:0},tex:{value:new THREE.CanvasTexture(tc)},res:{value:new THREE.Vector2(W,H)}},
        vertexShader:`void main(){gl_Position=vec4(position,1.);}`,
        fragmentShader:`
          uniform float time;uniform sampler2D tex;uniform vec2 res;
          float rand(float n){return fract(sin(n)*43758.5);}
          void main(){
            vec2 uv=gl_FragCoord.xy/res;
            float row=floor(uv.y*40.);
            float g=step(.88,rand(row+floor(time*10.)));
            float shift=g*(rand(row+time)-.5)*.08;
            float cr=g*rand(time+1.)*.006;
            vec4 r=texture2D(tex,vec2(uv.x+shift+cr,uv.y));
            vec4 gr=texture2D(tex,vec2(uv.x+shift,uv.y));
            vec4 b=texture2D(tex,vec2(uv.x+shift-cr,uv.y));
            vec3 col=vec3(r.r,gr.g,b.b);col+=g*vec3(.15,-.04,-.04);
            gl_FragColor=vec4(col,1.);
          }`,
      });
      scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2),mat));
      const clock=new THREE.Clock();let raf;
      const tick=()=>{raf=requestAnimationFrame(tick);mat.uniforms.time.value=clock.getElapsedTime();renderer.render(scene,camera);};
      clock.start();tick();
      return{pause(){cancelAnimationFrame(raf);clock.stop();},resume(){clock.start();tick();}};
    }
  },
  {
    id: 'thjs-image-distort',
    name: 'Image Ripple Distortion',
    cat: 'threejs-shader',
    engine: 'threejs',
    tags: ['shader','ripple','distortion','image','uv','water'],
    desc: 'Water-ripple UV distortion applied to a canvas texture via the fragment shader.',
    code: `const mat = new THREE.ShaderMaterial({
  uniforms: { time:{value:0}, map:{value:texture} },
  vertexShader: \`varying vec2 vUv;
    void main(){vUv=uv;gl_Position=vec4(position,1.);}\`,
  fragmentShader: \`
    uniform float time; uniform sampler2D map;
    varying vec2 vUv;
    void main(){
      vec2 uv=vUv;
      uv.x+=sin(uv.y*25.+time*2.)*.012;
      uv.y+=cos(uv.x*25.+time*2.)*.012;
      gl_FragColor=texture2D(map,uv);
    }\`,
});`,
    prompt: `Create a Three.js image ripple distortion. Apply a CanvasTexture to a full-screen PlaneGeometry. Fragment shader offsets UV.x with sin(UV.y*freq+time*speed)*amount and UV.y with cos(UV.x*freq+time*speed)*amount to create a water ripple effect on the image.`,
    html: '',
    animate(c) {
      const W=c.offsetWidth||240,H=c.offsetHeight||160;
      const renderer=new THREE.WebGLRenderer({antialias:true});
      renderer.setSize(W,H);
      Object.assign(renderer.domElement.style,{width:'100%',height:'100%',display:'block'});
      c.appendChild(renderer.domElement);
      const scene=new THREE.Scene();
      const camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1);
      const tc=document.createElement('canvas');tc.width=W;tc.height=H;
      const tx=tc.getContext('2d');
      const g=tx.createRadialGradient(W*.3,H*.4,5,W*.5,H*.5,W*.6);
      g.addColorStop(0,'#ff6b9d');g.addColorStop(.5,'#c026d3');g.addColorStop(1,'#0d1117');
      tx.fillStyle=g;tx.fillRect(0,0,W,H);
      tx.font=`bold ${Math.floor(H*.28)}px sans-serif`;tx.textAlign='center';tx.textBaseline='middle';
      tx.shadowBlur=10;tx.shadowColor='#fff';
      tx.fillStyle='rgba(255,255,255,0.9)';tx.fillText('RIPPLE',W/2,H/2);
      const mat=new THREE.ShaderMaterial({
        uniforms:{time:{value:0},map:{value:new THREE.CanvasTexture(tc)}},
        vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position,1.);}`,
        fragmentShader:`
          uniform float time;uniform sampler2D map;varying vec2 vUv;
          void main(){
            vec2 uv=vUv;
            uv.x+=sin(uv.y*25.+time*2.)*.012;
            uv.y+=cos(uv.x*25.+time*2.)*.012;
            gl_FragColor=texture2D(map,uv);
          }`,
      });
      scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2),mat));
      const clock=new THREE.Clock();let raf;
      const tick=()=>{raf=requestAnimationFrame(tick);mat.uniforms.time.value=clock.getElapsedTime();renderer.render(scene,camera);};
      clock.start();tick();
      return{pause(){cancelAnimationFrame(raf);clock.stop();},resume(){clock.start();tick();}};
    }
  },

  // ─── Three.js: Text ──────────────────────────────────────────────────
  {
    id: 'thjs-text-wave',
    name: '3D Text Wave',
    cat: 'threejs-text',
    engine: 'threejs',
    tags: ['text','3d','wave','canvas','texture','vertex'],
    desc: 'Canvas-texture text on a subdivided PlaneGeometry — vertices wave via vertex shader.',
    code: `const tc=document.createElement('canvas'); tc.width=512; tc.height=256;
const tx=tc.getContext('2d');
tx.fillStyle='#0d0d1a'; tx.fillRect(0,0,512,256);
tx.font='bold 96px sans-serif'; tx.textAlign='center'; tx.textBaseline='middle';
tx.fillStyle='#a78bfa'; tx.fillText('WAVE', 256, 128);
const mat = new THREE.ShaderMaterial({
  uniforms:{ time:{value:0}, map:{value:new THREE.CanvasTexture(tc)} },
  vertexShader:\`
    uniform float time; varying vec2 vUv;
    void main(){
      vUv=uv; vec3 p=position;
      p.z+=sin(p.x*5.+time*2.)*.1+sin(p.y*4.+time*1.3)*.07;
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
    }\`,
  fragmentShader:\`
    uniform sampler2D map; varying vec2 vUv;
    void main(){ gl_FragColor=texture2D(map,vUv); }\`,
});
scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,1,40,20), mat));`,
    prompt: `Create a Three.js 3D text wave. Draw text onto a canvas, use as CanvasTexture on PlaneGeometry(2,1,40,20). Vertex shader displaces Z: p.z += sin(p.x*5+time*2)*0.1 + sin(p.y*4+time*1.3)*0.07. Use PerspectiveCamera.`,
    html: '',
    animate(c) {
      const W=c.offsetWidth||240,H=c.offsetHeight||160;
      const renderer=new THREE.WebGLRenderer({antialias:true});
      renderer.setSize(W,H);
      renderer.setClearColor(0x0d0d1a,1);
      Object.assign(renderer.domElement.style,{width:'100%',height:'100%',display:'block'});
      c.appendChild(renderer.domElement);
      const scene=new THREE.Scene();
      const camera=new THREE.PerspectiveCamera(45,W/H,.1,10);
      camera.position.z=2;
      const tc=document.createElement('canvas');tc.width=512;tc.height=256;
      const tx=tc.getContext('2d');
      tx.fillStyle='#0d0d1a';tx.fillRect(0,0,512,256);
      tx.font='bold 96px sans-serif';tx.textAlign='center';tx.textBaseline='middle';
      tx.fillStyle='rgba(124,58,237,0.4)';tx.fillText('WAVE',258,130);
      tx.fillStyle='#a78bfa';tx.fillText('WAVE',256,128);
      const mat=new THREE.ShaderMaterial({
        uniforms:{time:{value:0},map:{value:new THREE.CanvasTexture(tc)}},
        transparent:true,
        vertexShader:`
          uniform float time;varying vec2 vUv;
          void main(){
            vUv=uv;vec3 p=position;
            p.z+=sin(p.x*5.+time*2.)*.1+sin(p.y*4.+time*1.3)*.07;
            gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
          }`,
        fragmentShader:`
          uniform sampler2D map;varying vec2 vUv;
          void main(){gl_FragColor=texture2D(map,vUv);}`,
      });
      scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,1,40,20),mat));
      const clock=new THREE.Clock();let raf;
      const tick=()=>{raf=requestAnimationFrame(tick);mat.uniforms.time.value=clock.getElapsedTime();renderer.render(scene,camera);};
      clock.start();tick();
      return{pause(){cancelAnimationFrame(raf);clock.stop();},resume(){clock.start();tick();}};
    }
  },
  {
    id: 'thjs-text-neon',
    name: 'Neon Glow Text',
    cat: 'threejs-text',
    engine: 'threejs',
    tags: ['text','neon','glow','shader','canvas','bloom','additive'],
    desc: 'Multi-layer canvas text with animated neon pulse using AdditiveBlending ShaderMaterial.',
    code: `const tc=document.createElement('canvas'); tc.width=W; tc.height=H;
const tx=tc.getContext('2d');
tx.fillStyle='#050510'; tx.fillRect(0,0,W,H);
tx.font='bold 64px monospace'; tx.textAlign='center'; tx.textBaseline='middle';
[30,20,12,5,0].forEach((blur,i)=>{
  tx.shadowBlur=blur; tx.shadowColor='#00ffff';
  tx.fillStyle=\`rgba(0,255,255,\${.1+i*.15})\`;
  tx.fillText('NEON',W/2,H/2);
});
const mat = new THREE.ShaderMaterial({
  uniforms:{ time:{value:0}, map:{value:new THREE.CanvasTexture(tc)} },
  transparent:true, blending:THREE.AdditiveBlending, depthWrite:false,
  fragmentShader:\`
    uniform float time; uniform sampler2D map; varying vec2 vUv;
    void main(){
      vec4 t=texture2D(map,vUv);
      float pulse=.75+.25*sin(time*2.5);
      gl_FragColor=vec4(t.rgb*pulse,t.a*pulse);
    }\`,
});`,
    prompt: `Create Three.js neon glow text. Draw layered text with decreasing shadowBlur passes onto a canvas. Apply with ShaderMaterial (AdditiveBlending, transparent, depthWrite:false). Fragment shader: pulse = 0.75+0.25*sin(time*2.5), multiply rgb and alpha by pulse.`,
    html: '',
    animate(c) {
      const W=c.offsetWidth||240,H=c.offsetHeight||160;
      const renderer=new THREE.WebGLRenderer({antialias:true});
      renderer.setSize(W,H);
      renderer.setClearColor(0x050510,1);
      Object.assign(renderer.domElement.style,{width:'100%',height:'100%',display:'block'});
      c.appendChild(renderer.domElement);
      const scene=new THREE.Scene();
      const camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1);
      const tc=document.createElement('canvas');tc.width=W;tc.height=H;
      const tx=tc.getContext('2d');
      tx.fillStyle='#050510';tx.fillRect(0,0,W,H);
      const fs=Math.floor(H*.35);
      tx.font=`bold ${fs}px monospace`;tx.textAlign='center';tx.textBaseline='middle';
      const blurs=[30,20,12,5,0];
      const alphas=[.08,.15,.3,.6,.9];
      for(let i=0;i<5;i++){tx.shadowBlur=blurs[i];tx.shadowColor='#00ffff';tx.fillStyle=`rgba(0,255,255,${alphas[i]})`;tx.fillText('NEON',W/2,H/2);}
      tx.shadowBlur=0;
      const mat=new THREE.ShaderMaterial({
        uniforms:{time:{value:0},map:{value:new THREE.CanvasTexture(tc)}},
        transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,
        vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position,1.);}`,
        fragmentShader:`
          uniform float time;uniform sampler2D map;varying vec2 vUv;
          void main(){
            vec4 t=texture2D(map,vUv);
            float pulse=.75+.25*sin(time*2.5);
            gl_FragColor=vec4(t.rgb*pulse,t.a*pulse);
          }`,
      });
      scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2),mat));
      const clock=new THREE.Clock();let raf;
      const tick=()=>{raf=requestAnimationFrame(tick);mat.uniforms.time.value=clock.getElapsedTime();renderer.render(scene,camera);};
      clock.start();tick();
      return{pause(){cancelAnimationFrame(raf);clock.stop();},resume(){clock.start();tick();}};
    }
  },
  {
    id: 'thjs-text-reveal',
    name: 'Text Curtain Reveal',
    cat: 'threejs-text',
    engine: 'threejs',
    tags: ['text','reveal','curtain','shader','wipe','mask'],
    desc: 'Shader-based curtain wipe reveals text left-to-right with a glowing rough edge.',
    code: `const mat = new THREE.ShaderMaterial({
  uniforms:{ progress:{value:0}, map:{value:textTexture} },
  transparent:true,
  fragmentShader:\`
    uniform float progress; uniform sampler2D map;
    varying vec2 vUv;
    float rand(float n){return fract(sin(n)*43758.5);}
    void main(){
      float noise=rand(floor(vUv.x*30.)+floor(vUv.y*20.)*.1);
      float threshold=vUv.x+noise*.18;
      if(threshold>progress) discard;
      vec4 t=texture2D(map,vUv);
      float edge=1.-smoothstep(progress-.12,progress,threshold);
      gl_FragColor=vec4(t.rgb+vec3(.3,.1,.6)*edge*.8,t.a);
    }\`,
});
// Animate: progress oscillates 0 → 1.2 → 0`,
    prompt: `Create a Three.js text curtain reveal. Canvas text as CanvasTexture. Fragment shader: noise = rand(floor(uv.x*30)+floor(uv.y*20)*0.1), threshold = uv.x+noise*0.18. Discard if threshold > progress. Add glowing edge where threshold ≈ progress with smoothstep. Animate progress 0→1.`,
    html: '',
    animate(c) {
      const W=c.offsetWidth||240,H=c.offsetHeight||160;
      const renderer=new THREE.WebGLRenderer({antialias:true});
      renderer.setSize(W,H);
      renderer.setClearColor(0x0d0d1a,1);
      Object.assign(renderer.domElement.style,{width:'100%',height:'100%',display:'block'});
      c.appendChild(renderer.domElement);
      const scene=new THREE.Scene();
      const camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1);
      const tc=document.createElement('canvas');tc.width=W;tc.height=H;
      const tx=tc.getContext('2d');
      tx.fillStyle='#0d0d1a';tx.fillRect(0,0,W,H);
      tx.font=`bold ${Math.floor(H*.32)}px sans-serif`;tx.textAlign='center';tx.textBaseline='middle';
      tx.fillStyle='rgba(124,58,237,0.4)';tx.fillText('REVEAL',W/2+2,H/2+2);
      tx.fillStyle='#a78bfa';tx.fillText('REVEAL',W/2,H/2);
      const mat=new THREE.ShaderMaterial({
        uniforms:{progress:{value:0},map:{value:new THREE.CanvasTexture(tc)}},
        transparent:true,
        vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position,1.);}`,
        fragmentShader:`
          uniform float progress;uniform sampler2D map;varying vec2 vUv;
          float rand(float n){return fract(sin(n)*43758.5);}
          void main(){
            float noise=rand(floor(vUv.x*30.)+floor(vUv.y*20.)*.1);
            float threshold=vUv.x+noise*.18;
            if(threshold>progress)discard;
            vec4 t=texture2D(map,vUv);
            float edge=1.-smoothstep(progress-.12,progress,threshold);
            gl_FragColor=vec4(t.rgb+vec3(.3,.1,.6)*edge*.8,t.a);
          }`,
      });
      scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2),mat));
      const clock=new THREE.Clock();let raf;
      let prog=0,dir=1;
      const tick=()=>{
        raf=requestAnimationFrame(tick);
        const dt=clock.getDelta();
        prog+=dir*dt*.7;
        if(prog>=1.2){prog=1.2;dir=-1;}else if(prog<=-0.1){prog=-0.1;dir=1;}
        mat.uniforms.progress.value=prog;
        renderer.render(scene,camera);
      };
      clock.start();tick();
      return{pause(){cancelAnimationFrame(raf);clock.stop();},resume(){clock.start();tick();}};
    }
  },

  // ─── Three.js: Transitions ───────────────────────────────────────────
  {
    id: 'thjs-trans-wave',
    name: '3D Wave Wipe',
    cat: 'threejs-transition',
    engine: 'threejs',
    tags: ['transition','wave','wipe','shader','3d'],
    desc: 'Page transition: scene A wiped away by a travelling sine wave with a glowing edge.',
    code: `const mat = new THREE.ShaderMaterial({
  uniforms:{
    progress:{value:0},
    colA:{value:new THREE.Color(0x7c3aed)},
    colB:{value:new THREE.Color(0x06b6d4)}
  },
  fragmentShader:\`
    uniform float progress; uniform vec3 colA,colB;
    varying vec2 vUv;
    void main(){
      float wave=vUv.x+sin(vUv.y*10.+progress*6.)*.1;
      float mask=smoothstep(progress-.06,progress+.06,wave);
      vec3 col=mix(colA,colB,mask);
      float edge=smoothstep(progress-.02,progress+.02,wave)
               *smoothstep(progress+.06,progress+.02,wave);
      col+=vec3(.8,.5,1.)*edge*.6;
      gl_FragColor=vec4(col,1.);
    }\`,
});
// Animate: progress 0 → 1`,
    prompt: `Create a Three.js wave wipe transition. Fragment shader: wave = UV.x + sin(UV.y*10+progress*6)*0.1. smoothstep on wave vs progress blends colA/colB. Add a glowing edge at the wave front using two overlapping smoothsteps. Animate progress 0→1.`,
    html: '',
    animate(c) {
      const W=c.offsetWidth||240,H=c.offsetHeight||160;
      const renderer=new THREE.WebGLRenderer({antialias:true});
      renderer.setSize(W,H);
      Object.assign(renderer.domElement.style,{width:'100%',height:'100%',display:'block'});
      c.appendChild(renderer.domElement);
      const scene=new THREE.Scene();
      const camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1);
      const mat=new THREE.ShaderMaterial({
        uniforms:{progress:{value:0},colA:{value:new THREE.Color(0x7c3aed)},colB:{value:new THREE.Color(0x06b6d4)}},
        vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position,1.);}`,
        fragmentShader:`
          uniform float progress;uniform vec3 colA,colB;varying vec2 vUv;
          void main(){
            float wave=vUv.x+sin(vUv.y*10.+progress*6.)*.1;
            float mask=smoothstep(progress-.06,progress+.06,wave);
            vec3 bg=mix(vec3(.05,.03,.12),vec3(.02,.08,.12),vUv.y);
            vec3 col=mix(colA*(.5+.5*vUv.y),bg,mask);
            float edge=smoothstep(progress-.02,progress+.02,wave)*smoothstep(progress+.06,progress+.02,wave);
            col+=vec3(.8,.5,1.)*edge*.6;
            gl_FragColor=vec4(col,1.);
          }`,
      });
      scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2),mat));
      const clock=new THREE.Clock();let raf;
      let prog=0,dir=1;
      const tick=()=>{
        raf=requestAnimationFrame(tick);
        const dt=clock.getDelta();
        prog+=dir*dt*.6;
        if(prog>=1.1){prog=1.1;dir=-1;}else if(prog<=-0.1){prog=-0.1;dir=1;}
        mat.uniforms.progress.value=prog;
        renderer.render(scene,camera);
      };
      clock.start();tick();
      return{pause(){cancelAnimationFrame(raf);clock.stop();},resume(){clock.start();tick();}};
    }
  },
  {
    id: 'thjs-trans-dissolve',
    name: 'Noise Dissolve',
    cat: 'threejs-transition',
    engine: 'threejs',
    tags: ['transition','dissolve','noise','shader','discard'],
    desc: 'Noise-based dissolve transition fragments pixels into chaos before revealing the new scene.',
    code: `const mat = new THREE.ShaderMaterial({
  uniforms:{ progress:{value:0}, mapA:{value:texA}, mapB:{value:texB} },
  fragmentShader:\`
    uniform float progress; uniform sampler2D mapA,mapB;
    varying vec2 vUv;
    float noise(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5);}
    void main(){
      float n=noise(floor(vUv*35.));
      float d=smoothstep(progress-.25,progress+.25,n);
      gl_FragColor=mix(texture2D(mapA,vUv),texture2D(mapB,vUv),d);
    }\`,
});
// Animate progress 0 → 1`,
    prompt: `Create a Three.js noise dissolve transition. Two canvas textures (mapA, mapB). Fragment shader: noise = fract(sin(dot(floor(uv*35), vec2(127.1,311.7)))*43758.5). d = smoothstep(progress-0.25, progress+0.25, noise). gl_FragColor = mix(mapA, mapB, d). Animate progress 0→1.`,
    html: '',
    animate(c) {
      const W=c.offsetWidth||240,H=c.offsetHeight||160;
      const renderer=new THREE.WebGLRenderer({antialias:true});
      renderer.setSize(W,H);
      Object.assign(renderer.domElement.style,{width:'100%',height:'100%',display:'block'});
      c.appendChild(renderer.domElement);
      const scene=new THREE.Scene();
      const camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1);
      function mkTex(label,c1,c2,fc){
        const cv=document.createElement('canvas');cv.width=W;cv.height=H;
        const cx=cv.getContext('2d');
        const g=cx.createLinearGradient(0,0,W,H);g.addColorStop(0,c1);g.addColorStop(1,c2);
        cx.fillStyle=g;cx.fillRect(0,0,W,H);
        cx.font=`bold ${Math.floor(H*.3)}px sans-serif`;cx.textAlign='center';cx.textBaseline='middle';
        cx.fillStyle=fc;cx.fillText(label,W/2,H/2);
        return new THREE.CanvasTexture(cv);
      }
      const texA=mkTex('FROM','#1a0533','#0d2b45','#a78bfa');
      const texB=mkTex('TO','#052e16','#0c1a2e','#34d399');
      const mat=new THREE.ShaderMaterial({
        uniforms:{progress:{value:0},mapA:{value:texA},mapB:{value:texB}},
        vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position,1.);}`,
        fragmentShader:`
          uniform float progress;uniform sampler2D mapA,mapB;varying vec2 vUv;
          float noise(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5);}
          void main(){
            float n=noise(floor(vUv*35.));
            float d=smoothstep(progress-.25,progress+.25,n);
            gl_FragColor=mix(texture2D(mapA,vUv),texture2D(mapB,vUv),d);
          }`,
      });
      scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2),mat));
      const clock=new THREE.Clock();let raf;
      let prog=0,dir=1;
      const tick=()=>{
        raf=requestAnimationFrame(tick);
        const dt=clock.getDelta();
        prog+=dir*dt*.45;
        if(prog>=1.2){prog=1.2;dir=-1;}else if(prog<=-0.2){prog=-0.2;dir=1;}
        mat.uniforms.progress.value=prog;
        renderer.render(scene,camera);
      };
      clock.start();tick();
      return{pause(){cancelAnimationFrame(raf);clock.stop();},resume(){clock.start();tick();}};
    }
  },
  {
    id: 'thjs-trans-pixel',
    name: 'Pixel Block Transition',
    cat: 'threejs-transition',
    engine: 'threejs',
    tags: ['transition','pixel','blocks','shader','retro','grid'],
    desc: 'Retro pixel-block wipe: tiles stagger from scene A to scene B in a diagonal wave.',
    code: `const mat = new THREE.ShaderMaterial({
  uniforms:{ progress:{value:0}, mapA:{value:texA}, mapB:{value:texB}, cols:{value:10.}, rows:{value:7.} },
  fragmentShader:\`
    uniform float progress,cols,rows;
    uniform sampler2D mapA,mapB; varying vec2 vUv;
    void main(){
      vec2 cell=floor(vUv*vec2(cols,rows));
      float delay=(cell.x/cols+cell.y/rows)*.5;
      float t=clamp((progress-delay)/(1.-delay+.001),0.,1.);
      gl_FragColor=mix(texture2D(mapA,vUv),texture2D(mapB,vUv),step(.5,t));
    }\`,
});
// Animate progress 0 → 1`,
    prompt: `Create a Three.js pixel block transition. Fragment shader divides UV into cols×rows grid. Each cell: delay=(cellX/cols+cellY/rows)*0.5, t=clamp((progress-delay)/(1-delay),0,1). step(0.5,t) flips the tile from mapA to mapB creating a diagonal stagger.`,
    html: '',
    animate(c) {
      const W=c.offsetWidth||240,H=c.offsetHeight||160;
      const renderer=new THREE.WebGLRenderer({antialias:true});
      renderer.setSize(W,H);
      Object.assign(renderer.domElement.style,{width:'100%',height:'100%',display:'block'});
      c.appendChild(renderer.domElement);
      const scene=new THREE.Scene();
      const camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1);
      function mkTex(label,c1,c2,fc){
        const cv=document.createElement('canvas');cv.width=W;cv.height=H;
        const cx=cv.getContext('2d');
        const g=cx.createLinearGradient(0,0,W,H);g.addColorStop(0,c1);g.addColorStop(1,c2);
        cx.fillStyle=g;cx.fillRect(0,0,W,H);
        cx.font=`bold ${Math.floor(H*.3)}px sans-serif`;cx.textAlign='center';cx.textBaseline='middle';
        cx.fillStyle=fc;cx.fillText(label,W/2,H/2);
        return new THREE.CanvasTexture(cv);
      }
      const texA=mkTex('SCENE A','#1a0533','#1e1b4b','#c4b5fd');
      const texB=mkTex('SCENE B','#0c2a1a','#012616','#6ee7b7');
      const mat=new THREE.ShaderMaterial({
        uniforms:{progress:{value:0},mapA:{value:texA},mapB:{value:texB},cols:{value:10.},rows:{value:7.}},
        vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position,1.);}`,
        fragmentShader:`
          uniform float progress,cols,rows;uniform sampler2D mapA,mapB;varying vec2 vUv;
          void main(){
            vec2 cell=floor(vUv*vec2(cols,rows));
            float delay=(cell.x/cols+cell.y/rows)*.5;
            float t=clamp((progress-delay)/(1.-delay+.001),0.,1.);
            gl_FragColor=mix(texture2D(mapA,vUv),texture2D(mapB,vUv),step(.5,t));
          }`,
      });
      scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2),mat));
      const clock=new THREE.Clock();let raf;
      let prog=0,dir=1;
      const tick=()=>{
        raf=requestAnimationFrame(tick);
        const dt=clock.getDelta();
        prog+=dir*dt*.45;
        if(prog>=1.3){prog=1.3;dir=-1;}else if(prog<=-0.3){prog=-0.3;dir=1;}
        mat.uniforms.progress.value=prog;
        renderer.render(scene,camera);
      };
      clock.start();tick();
      return{pause(){cancelAnimationFrame(raf);clock.stop();},resume(){clock.start();tick();}};
    }
  },

  // ─── Three.js: UI ────────────────────────────────────────────────────
  {
    id: 'thjs-ui-glow-btn',
    name: 'Glow Orb Button',
    cat: 'threejs-ui',
    engine: 'threejs',
    tags: ['ui','button','glow','orb','shader','interactive','hover'],
    desc: 'Interactive 3D button with animated glow orb that intensifies on hover.',
    code: `const mat = new THREE.ShaderMaterial({
  uniforms:{ time:{value:0}, hover:{value:0}, label:{value:labelTex} },
  transparent:true, depthWrite:false,
  fragmentShader:\`
    uniform float time,hover; uniform sampler2D label;
    varying vec2 vUv;
    void main(){
      float dist=length(vUv-vec2(.5,.5));
      float pulse=.8+.2*sin(time*2.5);
      float glow=(.25+hover*.2)/(dist*7.+.25)*pulse;
      vec3 col=mix(vec3(.45,.05,.85),vec3(.05,.6,.95),vUv.x)*glow;
      float rim=smoothstep(.42,.45,dist)*smoothstep(.5,.46,dist);
      col+=rim*vec3(.7,.4,1.)*(1.+hover);
      vec4 lbl=texture2D(label,vUv);
      col=mix(col,lbl.rgb,lbl.a*.7);
      gl_FragColor=vec4(col,clamp(glow*.9+rim*.8,0.,1.));
    }\`,
});
el.addEventListener('mouseenter',()=>mat.uniforms.hover.value=1);
el.addEventListener('mouseleave',()=>mat.uniforms.hover.value=0);`,
    prompt: `Create a Three.js glowing orb button. Fragment shader: glow = intensity/(distance_from_center*scale+offset)*pulse where pulse=0.8+0.2*sin(time). Add a rim highlight at the edge. hover uniform (0/1) increases intensity on mouseenter/mouseleave. Draw label text on CanvasTexture and blend in.`,
    html: '',
    animate(c) {
      const W=c.offsetWidth||240,H=c.offsetHeight||160;
      const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
      renderer.setSize(W,H);
      renderer.setClearColor(0x080818,1);
      Object.assign(renderer.domElement.style,{width:'100%',height:'100%',display:'block',cursor:'pointer'});
      c.appendChild(renderer.domElement);
      const scene=new THREE.Scene();
      const camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1);
      const tc=document.createElement('canvas');tc.width=W;tc.height=H;
      const tx=tc.getContext('2d');
      tx.clearRect(0,0,W,H);
      tx.font=`bold ${Math.floor(H*.18)}px sans-serif`;tx.textAlign='center';tx.textBaseline='middle';
      tx.fillStyle='rgba(220,200,255,0.9)';tx.fillText('HOVER ME',W/2,H/2);
      const mat=new THREE.ShaderMaterial({
        uniforms:{time:{value:0},hover:{value:0},label:{value:new THREE.CanvasTexture(tc)}},
        transparent:true,depthWrite:false,
        vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position,1.);}`,
        fragmentShader:`
          uniform float time,hover;uniform sampler2D label;varying vec2 vUv;
          void main(){
            float dist=length(vUv-vec2(.5,.5));
            float pulse=.8+.2*sin(time*2.5);
            float glow=(.25+hover*.2)/(dist*7.+.25)*pulse;
            vec3 col=mix(vec3(.45,.05,.85),vec3(.05,.6,.95),vUv.x+sin(time*.5)*.1)*glow;
            float rim=smoothstep(.42,.45,dist)*smoothstep(.5,.46,dist);
            col+=rim*vec3(.7,.4,1.)*(1.+hover);
            vec4 lbl=texture2D(label,vUv);
            col=mix(col,lbl.rgb,lbl.a*.7);
            gl_FragColor=vec4(col,clamp(glow*.9+rim*.8,0.,1.));
          }`,
      });
      scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2),mat));
      renderer.domElement.addEventListener('mouseenter',()=>{mat.uniforms.hover.value=1;});
      renderer.domElement.addEventListener('mouseleave',()=>{mat.uniforms.hover.value=0;});
      const clock=new THREE.Clock();let raf;
      const tick=()=>{raf=requestAnimationFrame(tick);mat.uniforms.time.value=clock.getElapsedTime();renderer.render(scene,camera);};
      clock.start();tick();
      return{pause(){cancelAnimationFrame(raf);clock.stop();},resume(){clock.start();tick();}};
    }
  },
  {
    id: 'thjs-ui-ripple',
    name: 'Ripple Click Effect',
    cat: 'threejs-ui',
    engine: 'threejs',
    tags: ['ui','ripple','click','shader','interactive','button'],
    desc: 'Click anywhere to spawn an expanding ring ripple that fades out — pure shader, no DOM.',
    code: `const mat = new THREE.ShaderMaterial({
  uniforms:{ time:{value:0}, bg:{value:bgTex}, origin:{value:new THREE.Vector2(.5,.5)}, st:{value:-99.}, asp:{value:W/H} },
  transparent:true,
  fragmentShader:\`
    uniform float time,st,asp; uniform vec2 origin;
    uniform sampler2D bg; varying vec2 vUv;
    void main(){
      vec4 base=texture2D(bg,vUv);
      float age=time-st;
      vec2 d=(vUv-origin)*vec2(asp,1.);
      float dist=length(d);
      float radius=age*.55;
      float ring=smoothstep(.025,0.,abs(dist-radius))*(1.-smoothstep(0.,.5,age*.8));
      vec3 rCol=mix(vec3(.4,.7,1.),vec3(.7,.3,1.),dist*2.);
      gl_FragColor=vec4(mix(base.rgb,rCol,ring*.9),1.);
    }\`,
});
el.addEventListener('click', e => {
  mat.uniforms.origin.value.set(e.offsetX/W, 1.-e.offsetY/H);
  mat.uniforms.st.value = clock.getElapsedTime();
});`,
    prompt: `Create a Three.js click ripple shader. On click record UV origin and startTime. Fragment shader: age=time-startTime, radius=age*speed, ring=smoothstep(thickness,0,abs(length((uv-origin)*aspect)-radius))*(1-fade(age)). Blend ring colour over background texture.`,
    html: '',
    animate(c) {
      const W=c.offsetWidth||240,H=c.offsetHeight||160;
      const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
      renderer.setSize(W,H);
      renderer.setClearColor(0x0c0c1e,1);
      Object.assign(renderer.domElement.style,{width:'100%',height:'100%',display:'block',cursor:'crosshair'});
      c.appendChild(renderer.domElement);
      const scene=new THREE.Scene();
      const camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1);
      const tc=document.createElement('canvas');tc.width=W;tc.height=H;
      const tx=tc.getContext('2d');
      const g=tx.createLinearGradient(0,0,W,H);g.addColorStop(0,'#0c0c1e');g.addColorStop(1,'#1a0533');
      tx.fillStyle=g;tx.fillRect(0,0,W,H);
      tx.font=`bold ${Math.floor(H*.18)}px sans-serif`;tx.textAlign='center';tx.textBaseline='middle';
      tx.fillStyle='rgba(180,160,255,0.4)';tx.fillText('CLICK TO RIPPLE',W/2,H/2);
      const clock=new THREE.Clock();
      const mat=new THREE.ShaderMaterial({
        uniforms:{time:{value:0},bg:{value:new THREE.CanvasTexture(tc)},origin:{value:new THREE.Vector2(.5,.5)},st:{value:-99.},asp:{value:W/H}},
        transparent:true,
        vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position,1.);}`,
        fragmentShader:`
          uniform float time,st,asp;uniform vec2 origin;uniform sampler2D bg;varying vec2 vUv;
          void main(){
            vec4 base=texture2D(bg,vUv);
            float age=time-st;
            vec2 d=(vUv-origin)*vec2(asp,1.);
            float dist=length(d);
            float radius=age*.55;
            float ring=smoothstep(.025,0.,abs(dist-radius))*(1.-smoothstep(0.,.5,age*.8));
            vec3 rCol=mix(vec3(.4,.7,1.),vec3(.7,.3,1.),dist*2.);
            gl_FragColor=vec4(mix(base.rgb,rCol,ring*.9),1.);
          }`,
      });
      scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2),mat));
      renderer.domElement.addEventListener('click',e=>{
        const rect=renderer.domElement.getBoundingClientRect();
        mat.uniforms.origin.value.set((e.clientX-rect.left)/rect.width,1.-(e.clientY-rect.top)/rect.height);
        mat.uniforms.st.value=clock.getElapsedTime();
      });
      let raf;
      let nextAuto=1.5;
      const tick=()=>{
        raf=requestAnimationFrame(tick);
        const t=clock.getElapsedTime();
        if(t>nextAuto){mat.uniforms.origin.value.set(.25+Math.random()*.5,.25+Math.random()*.5);mat.uniforms.st.value=t;nextAuto=t+2+Math.random()*2;}
        mat.uniforms.time.value=t;
        renderer.render(scene,camera);
      };
      clock.start();tick();
      return{pause(){cancelAnimationFrame(raf);clock.stop();},resume(){clock.start();tick();}};
    }
  },
  {
    id: 'thjs-ui-particles',
    name: 'Floating Particles',
    cat: 'threejs-ui',
    engine: 'threejs',
    tags: ['ui','particles','points','float','ambient','background','shader'],
    desc: 'Ambient floating particle system using THREE.Points with a glowing dot vertex+fragment shader.',
    code: `const COUNT=300;
const pos=new Float32Array(COUNT*3);
const sz=new Float32Array(COUNT);
for(let i=0;i<COUNT;i++){
  pos[i*3]=(Math.random()-.5)*6;
  pos[i*3+1]=(Math.random()-.5)*4;
  pos[i*3+2]=(Math.random()-.5)*4;
  sz[i]=Math.random()*6+2;
}
const geo=new THREE.BufferGeometry();
geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
geo.setAttribute('aSize',new THREE.BufferAttribute(sz,1));
const mat=new THREE.ShaderMaterial({
  uniforms:{time:{value:0}},
  vertexShader:\`
    attribute float aSize; uniform float time; varying float vA;
    void main(){
      vec3 p=position;
      p.y=mod(position.y+time*.08+2.,4.)-2.;
      vA=.4+.6*abs(sin(time*aSize*.3+position.x));
      gl_PointSize=aSize*(1.+.25*sin(time*2.+position.z*3.));
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
    }\`,
  fragmentShader:\`
    varying float vA;
    void main(){
      float d=length(gl_PointCoord-.5)*2.;
      float a=(1.-smoothstep(.2,.9,d))*vA;
      vec3 col=mix(vec3(.5,.3,1.),vec3(.2,.7,1.),gl_PointCoord.y);
      gl_FragColor=vec4(col,a);
    }\`,
  transparent:true, depthWrite:false, blending:THREE.AdditiveBlending
});
scene.add(new THREE.Points(geo,mat));`,
    prompt: `Create a Three.js floating particle system using THREE.Points. BufferGeometry with position and aSize attributes. Vertex shader loops particles vertically: p.y=mod(y+time*speed+2,4)-2. Fragment shader draws glowing dot from gl_PointCoord distance. Use AdditiveBlending, transparent, depthWrite:false.`,
    html: '',
    animate(c) {
      const W=c.offsetWidth||240,H=c.offsetHeight||160;
      const renderer=new THREE.WebGLRenderer({antialias:true});
      renderer.setSize(W,H);
      renderer.setClearColor(0x06060f,1);
      Object.assign(renderer.domElement.style,{width:'100%',height:'100%',display:'block'});
      c.appendChild(renderer.domElement);
      const scene=new THREE.Scene();
      const camera=new THREE.PerspectiveCamera(60,W/H,.1,20);
      camera.position.z=3;
      const COUNT=300;
      const pos=new Float32Array(COUNT*3);
      const sz=new Float32Array(COUNT);
      const spd=new Float32Array(COUNT);
      for(let i=0;i<COUNT;i++){
        pos[i*3]=(Math.random()-.5)*6;pos[i*3+1]=(Math.random()-.5)*4;pos[i*3+2]=(Math.random()-.5)*4;
        sz[i]=Math.random()*6+2;spd[i]=.05+Math.random()*.15;
      }
      const geo=new THREE.BufferGeometry();
      geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
      geo.setAttribute('aSize',new THREE.BufferAttribute(sz,1));
      geo.setAttribute('aSpd',new THREE.BufferAttribute(spd,1));
      const mat=new THREE.ShaderMaterial({
        uniforms:{time:{value:0}},
        vertexShader:`
          attribute float aSize,aSpd;uniform float time;varying float vA;
          void main(){
            vec3 p=position;
            p.y=mod(position.y+time*aSpd+2.,4.)-2.;
            vA=.4+.6*abs(sin(time*aSpd*3.+position.x));
            gl_PointSize=aSize*(1.+.25*sin(time*2.+position.z*3.));
            gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
          }`,
        fragmentShader:`
          varying float vA;
          void main(){
            float d=length(gl_PointCoord-.5)*2.;
            float a=(1.-smoothstep(.2,.9,d))*vA;
            vec3 col=mix(vec3(.5,.3,1.),vec3(.2,.7,1.),gl_PointCoord.y);
            gl_FragColor=vec4(col,a);
          }`,
        transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,
      });
      scene.add(new THREE.Points(geo,mat));
      const clock=new THREE.Clock();let raf;
      const tick=()=>{raf=requestAnimationFrame(tick);mat.uniforms.time.value=clock.getElapsedTime();renderer.render(scene,camera);};
      clock.start();tick();
      return{pause(){cancelAnimationFrame(raf);clock.stop();},resume(){clock.start();tick();}};
    }
  },

];

// ─── Syntax highlighting ──────────────────────────────────────────────
function hl(raw) {
  const e = raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // order matters — process from most to least specific
  return e
    .replace(/(\/\/.+)/g, '<span class="c">$1</span>')
    .replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g, '<span class="s">$1</span>')
    .replace(/\b(-?\d+\.?\d*)\b(?!["'])/g, '<span class="n">$1</span>')
    .replace(/\b(const|let|var|import|from|export|return|new|true|false|null|undefined|if|else|this)\b/g, '<span class="k">$1</span>')
    .replace(/\b(gsap|SplitText|Flip|Draggable|InertiaPlugin|MotionPathPlugin|DrawSVGPlugin|MorphSVGPlugin|ScrambleTextPlugin|CustomEase|TextPlugin|EasePack|Observer)\b/g, '<span class="g">$1</span>')
    .replace(/\.(to|from|fromTo|timeline|set|registerPlugin|create|getState|addLabel|kill|convertToPath|delayedCall)\(/g, '.<span class="m">$1</span>(');
}

// ─── Card factory ─────────────────────────────────────────────────────
function makeCard(anim) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.category = anim.category;
  card.dataset.engine   = anim.engine || 'gsap';
  card.dataset.search = `${anim.title} ${anim.desc} ${(anim.tags || []).join(' ')}`.toLowerCase();

  card.innerHTML = `
    <div class="card-preview">
      ${anim.html}
      <span class="pause-hint">⏸ paused</span>
    </div>
    <div class="card-body">
      <div class="card-header">
        <h3 class="card-title">${anim.title}</h3>
        <span class="cat-badge cat-${anim.category}">${anim.category}</span>
      </div>
      <p class="card-desc">${anim.desc}</p>
      <div class="code-wrap">
        <pre class="code-block">${hl(anim.code)}</pre>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-id="${anim.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          Copy Code
        </button>
        <button class="prompt-btn" data-id="${anim.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Copy Prompt
        </button>
      </div>
    </div>
  `;

  const preview = card.querySelector('.card-preview');
  let result;
  try { result = anim.animate(preview); } catch (err) { console.warn(anim.id, err); }

  if (result) {
    const list = Array.isArray(result) ? result : [result];
    preview.addEventListener('mouseenter', () => list.forEach(a => a?.pause?.()));
    preview.addEventListener('mouseleave', () => list.forEach(a => a?.resume?.()));
  }

  return card;
}

// ─── Filter + search ──────────────────────────────────────────────────
let activeFilter = 'all';
let searchQuery  = '';

function applyFilters() {
  let visible = 0, gsapVis = 0, threeVis = 0;
  document.querySelectorAll('.card').forEach(card => {
    const catOk    = activeFilter === 'all' || card.dataset.category === activeFilter;
    const searchOk = !searchQuery || card.dataset.search.includes(searchQuery);
    const show = catOk && searchOk;
    card.classList.toggle('hidden', !show);
    if (show) { visible++; card.dataset.engine === 'threejs' ? threeVis++ : gsapVis++; }
  });
  document.getElementById('empty').style.display = visible ? 'none' : 'block';
  const div = document.getElementById('threejs-divider');
  if (div) div.style.display = (gsapVis > 0 && threeVis > 0) ? 'flex' : 'none';
}

document.getElementById('filters').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeFilter = btn.dataset.filter;
  applyFilters();
});

document.getElementById('search').addEventListener('input', e => {
  searchQuery = e.target.value.toLowerCase();
  applyFilters();
});

// ─── Copy to clipboard ────────────────────────────────────────────────
function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2200);
}

document.addEventListener('click', async e => {
  const codeBtn   = e.target.closest('.copy-btn');
  const promptBtn = e.target.closest('.prompt-btn');
  const btn = codeBtn || promptBtn;
  if (!btn) return;
  const anim = ANIMS.find(a => a.id === btn.dataset.id);
  if (!anim) return;

  if (codeBtn) {
    try {
      await navigator.clipboard.writeText(anim.code);
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      showToast();
      setTimeout(() => { btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy Code'; btn.classList.remove('copied'); }, 2000);
    } catch { btn.textContent = 'Error'; }
  } else {
    const prompt = `Create a GSAP "${anim.title}" animation.

${anim.desc}

Here is an example implementation:
\`\`\`javascript
${anim.code}
\`\`\``;
    try {
      await navigator.clipboard.writeText(prompt);
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      showToast();
      setTimeout(() => { btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Copy Prompt'; btn.classList.remove('copied'); }, 2000);
    } catch { btn.textContent = 'Error'; }
  }
});

// ─── Init ─────────────────────────────────────────────────────────────
document.getElementById('anim-count').textContent =
  `${ANIMS.length} animations · hover to pause · Copy Code or Copy Prompt`;

const grid = document.getElementById('grid');
const gsapAnims  = ANIMS.filter(a => !a.engine || a.engine === 'gsap');
const threeAnims = ANIMS.filter(a => a.engine === 'threejs');

gsapAnims.forEach(anim => grid.appendChild(makeCard(anim)));

const divider = document.createElement('div');
divider.className = 'section-divider'; divider.id = 'threejs-divider';
divider.innerHTML = '<div class="div-line"></div><span class="div-label">✦ Three.js</span><div class="div-line"></div>';
grid.appendChild(divider);

threeAnims.forEach(anim => grid.appendChild(makeCard(anim)));
