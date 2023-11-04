export const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0, // this will set a delay before the children start animating
      staggerChildren: 0.3 // this will set the time inbetween children animation
    }
  }
};

export const slideAnimateVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,

  },
  exit: {
    opacity: 0,
    x: 100,
  }
}

