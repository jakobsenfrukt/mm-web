export const state = () => ({
  counter: 0,
  gif: '/gifs/small/hi.gif',
  isVisible: false,
  timeout: null
})

export const actions = {
  showGif (context, {image, duration}) {
    clearInterval(state.timeout);
    context.commit('showGif', image);
    if (duration) {
      context.dispatch('hideGif', duration);
    }
  },
  hideGif (context, duration) {
    state.timeout = setTimeout(() => {
      context.commit('hideGif')
    }, duration)
  }
}

export const mutations = {
  showGif (state, image) {
    state.counter++;
    state.gif = image;
    state.isVisible = true;
  },
  hideGif (state) {
    state.isVisible = false;
  }
}