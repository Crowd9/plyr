// ==========================================================================
// Plyr default config
// ==========================================================================

const defaults = {
  // Disable
  enabled: true,

  // Custom media title
  title: '',

  // Logging to console
  debug: false,

  // Auto play (if supported)
  autoplay: false,

  // Only allow one media playing at once (vimeo only)
  autopause: true,

  // Allow inline playback on iOS (this effects YouTube/Vimeo - HTML5 requires the attribute present)
  // TODO: Remove iosNative fullscreen option in favour of this (logic needs work)
  playsinline: true,

  // Default time to skip when rewind/fast forward
  seekTime: 10,

  // Default volume
  volume: 1,
  muted: false,

  // Pass a custom duration
  duration: null,

  // Display the media duration on load in the current time position
  // If you have opted to display both duration and currentTime, this is ignored
  displayDuration: true,

  // Invert the current time to be a countdown
  invertTime: true,

  // Clicking the currentTime inverts it's value to show time left rather than elapsed
  toggleInvert: true,

  // Force an aspect ratio
  // The format must be `'w:h'` (e.g. `'16:9'`)
  ratio: null,

  // Click video container to play/pause
  clickToPlay: true,

  // Auto hide the controls
  hideControls: true,

  // Reset to start when playback ended
  resetOnEnd: false,

  // Disable the standard context menu
  disableContextMenu: true,

  // Sprite (for icons)
  loadSprite: true,
  iconPrefix: 'plyr',
  iconUrl: 'https://cdn.plyr.io/3.6.4/plyr.svg',

  // Blank video (used to prevent errors on source change)
  blankVideo: 'https://cdn.plyr.io/static/blank.mp4',

  // Quality default
  quality: {
    default: 576,
    // The options to display in the UI, if available for the source media
    options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
    forced: false,
    onChange: null,
  },

  // Set loops
  loop: {
    active: false,
    // start: null,
    // end: null,
  },

  // Speed default and options to display
  speed: {
    selected: 1,
    // The options to display in the UI, if available for the source media (e.g. Vimeo and YouTube only support 0.5x-4x)
    options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4],
  },

  // Keyboard shortcut settings
  keyboard: {
    focused: true,
    global: false,
  },

  // Display tooltips
  tooltips: {
    controls: false,
    seek: true,
  },

  // Captions settings
  captions: {
    active: false,
    language: 'auto',
    // Listen to new tracks added after Plyr is initialized.
    // This is needed for streaming captions, but may result in unselectable options
    update: false,
  },

  // Fullscreen settings
  fullscreen: {
    enabled: true, // Allow fullscreen?
    fallback: true, // Fallback using full viewport/window
    iosNative: false, // Use the native fullscreen in iOS (disables custom controls)
    dblclick: true, // Toggle fullscreen on double click
    // Selector for the fullscreen container so contextual / non-player content can remain visible in fullscreen mode
    // Non-ancestors of the player element will be ignored
    // container: null, // defaults to the player element
  },

  // Local storage
  storage: {
    enabled: true,
    key: 'ggs-plyr',
  },

  // Default controls
  controls: [
    'play-large',
    // 'restart',
    // 'rewind',
    'play',
    // 'fast-forward',
    'progress',
    'current-time',
    // 'duration',
    'mute',
    'volume',
    'captions',
    'settings',
    'pip',
    'airplay',
    // 'download',
    'fullscreen',
  ],
  settings: ['captions', 'quality', 'speed'],

  // Localisation
  i18n: {
    restart: 'Restart',
    rewind: 'Rewind {seektime}s',
    play: 'Play',
    pause: 'Pause',
    fastForward: 'Forward {seektime}s',
    seek: 'Seek',
    seekLabel: '{currentTime} of {duration}',
    played: 'Played',
    buffered: 'Buffered',
    currentTime: 'Current time',
    duration: 'Duration',
    volume: 'Volume',
    mute: 'Mute',
    unmute: 'Unmute',
    enableCaptions: 'Enable captions',
    disableCaptions: 'Disable captions',
    download: 'Download',
    enterFullscreen: 'Enter fullscreen',
    exitFullscreen: 'Exit fullscreen',
    frameTitle: 'Player for {title}',
    captions: 'Captions',
    settings: 'Settings',
    pip: 'PIP',
    menuBack: 'Go back to previous menu',
    speed: 'Speed',
    normal: 'Normal',
    quality: 'Quality',
    loop: 'Loop',
    start: 'Start',
    end: 'End',
    all: 'All',
    reset: 'Reset',
    disabled: 'Disabled',
    enabled: 'Enabled',
    advertisement: 'Ad',
    qualityBadge: {
      2160: '4K',
      1440: 'HD',
      1080: 'HD',
      720: 'HD',
      576: 'SD',
      480: 'SD',
    },
  },

  // URLs
  urls: {
    download: null,
    vimeo: {
      sdk: 'https://player.vimeo.com/api/player.js',
      iframe: 'https://player.vimeo.com/video/{0}?{1}',
      api: 'https://vimeo.com/api/oembed.json?url={0}',
    },
    youtube: {
      sdk: 'https://www.youtube.com/iframe_api',
      api: 'https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}',
    },
    googleIMA: {
      sdk: 'https://imasdk.googleapis.com/js/sdkloader/ima3.js',
    },
  },

  // Custom control listeners
  listeners: {
    seek: null,
    play: null,
    pause: null,
    restart: null,
    rewind: null,
    fastForward: null,
    mute: null,
    volume: null,
    captions: null,
    download: null,
    fullscreen: null,
    pip: null,
    airplay: null,
    speed: null,
    quality: null,
    loop: null,
    language: null,
  },

  // Events to watch and bubble
  events: [
    // Events to watch on HTML5 media elements and bubble
    // https://developer.mozilla.org/en/docs/Web/Guide/Events/Media_events
    'ended',
    'progress',
    'stalled',
    'playing',
    'waiting',
    'canplay',
    'canplaythrough',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'timeupdate',
    'volumechange',
    'play',
    'pause',
    'error',
    'seeking',
    'seeked',
    'emptied',
    'ratechange',
    'cuechange',

    // Custom events
    'download',
    'enterfullscreen',
    'exitfullscreen',
    'captionsenabled',
    'captionsdisabled',
    'languagechange',
    'controlshidden',
    'controlsshown',
    'ready',

    // YouTube
    'statechange',

    // Quality
    'qualitychange',

    // Ads
    'adsloaded',
    'adscontentpause',
    'adscontentresume',
    'adstarted',
    'adsmidpoint',
    'adscomplete',
    'adsallcomplete',
    'adsimpression',
    'adsclick',
  ],

  // Selectors
  // Change these to match your template if using custom HTML
  selectors: {
    editable: 'input, textarea, select, [contenteditable]',
    container: '.ggs-plyr',
    controls: {
      container: null,
      wrapper: '.ggs-plyr__controls',
    },
    labels: '[data-plyr]',
    buttons: {
      play: '[data-plyr="play"]',
      pause: '[data-plyr="pause"]',
      restart: '[data-plyr="restart"]',
      rewind: '[data-plyr="rewind"]',
      fastForward: '[data-plyr="fast-forward"]',
      mute: '[data-plyr="mute"]',
      captions: '[data-plyr="captions"]',
      download: '[data-plyr="download"]',
      fullscreen: '[data-plyr="fullscreen"]',
      pip: '[data-plyr="pip"]',
      airplay: '[data-plyr="airplay"]',
      settings: '[data-plyr="settings"]',
      loop: '[data-plyr="loop"]',
    },
    inputs: {
      seek: '[data-plyr="seek"]',
      volume: '[data-plyr="volume"]',
      speed: '[data-plyr="speed"]',
      language: '[data-plyr="language"]',
      quality: '[data-plyr="quality"]',
    },
    display: {
      currentTime: '.ggs-plyr__time--current',
      duration: '.ggs-plyr__time--duration',
      buffer: '.ggs-plyr__progress__buffer',
      loop: '.ggs-plyr__progress__loop', // Used later
      volume: '.ggs-plyr__volume--display',
    },
    progress: '.ggs-plyr__progress',
    captions: '.ggs-plyr__captions',
    caption: '.ggs-plyr__caption',
  },

  // Class hooks added to the player in different states
  classNames: {
    type: 'ggs-plyr--{0}',
    provider: 'ggs-plyr--{0}',
    video: 'ggs-plyr__video-wrapper',
    embed: 'ggs-plyr__video-embed',
    videoFixedRatio: 'ggs-plyr__video-wrapper--fixed-ratio',
    embedContainer: 'ggs-plyr__video-embed__container',
    poster: 'ggs-plyr__poster',
    posterEnabled: 'ggs-plyr__poster-enabled',
    ads: 'ggs-plyr__ads',
    control: 'ggs-plyr__control',
    controlPressed: 'ggs-plyr__control--pressed',
    playing: 'ggs-plyr--playing',
    paused: 'ggs-plyr--paused',
    stopped: 'ggs-plyr--stopped',
    loading: 'ggs-plyr--loading',
    hover: 'ggs-plyr--hover',
    tooltip: 'ggs-plyr__tooltip',
    cues: 'ggs-plyr__cues',
    hidden: 'ggs-plyr__sr-only',
    hideControls: 'ggs-plyr--hide-controls',
    isIos: 'ggs-plyr--is-ios',
    isTouch: 'ggs-plyr--is-touch',
    uiSupported: 'ggs-plyr--full-ui',
    noTransition: 'ggs-plyr--no-transition',
    display: {
      time: 'ggs-plyr__time',
    },
    menu: {
      value: 'ggs-plyr__menu__value',
      badge: 'ggs-plyr__badge',
      open: 'ggs-plyr--menu-open',
    },
    captions: {
      enabled: 'ggs-plyr--captions-enabled',
      active: 'ggs-plyr--captions-active',
    },
    fullscreen: {
      enabled: 'ggs-plyr--fullscreen-enabled',
      fallback: 'ggs-plyr--fullscreen-fallback',
    },
    pip: {
      supported: 'ggs-plyr--pip-supported',
      active: 'ggs-plyr--pip-active',
    },
    airplay: {
      supported: 'ggs-plyr--airplay-supported',
      active: 'ggs-plyr--airplay-active',
    },
    tabFocus: 'ggs-plyr__tab-focus',
    previewThumbnails: {
      // Tooltip thumbs
      thumbContainer: 'ggs-plyr__preview-thumb',
      thumbContainerShown: 'ggs-plyr__preview-thumb--is-shown',
      imageContainer: 'ggs-plyr__preview-thumb__image-container',
      timeContainer: 'ggs-plyr__preview-thumb__time-container',
      // Scrubbing
      scrubbingContainer: 'ggs-plyr__preview-scrubbing',
      scrubbingContainerShown: 'ggs-plyr__preview-scrubbing--is-shown',
    },
  },

  // Embed attributes
  attributes: {
    embed: {
      provider: 'data-plyr-provider',
      id: 'data-plyr-embed-id',
    },
  },

  // Advertisements plugin
  // Register for an account here: http://vi.ai/publisher-video-monetization/?aid=plyrio
  ads: {
    enabled: false,
    publisherId: '',
    tagUrl: '',
  },

  // Preview Thumbnails plugin
  previewThumbnails: {
    enabled: false,
    src: '',
  },

  // Vimeo plugin
  vimeo: {
    byline: false,
    portrait: false,
    title: false,
    speed: true,
    transparent: false,
    // Custom settings from Plyr
    customControls: true,
    referrerPolicy: null, // https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/referrerPolicy
    // Whether the owner of the video has a Pro or Business account
    // (which allows us to properly hide controls without CSS hacks, etc)
    premium: false,
  },

  // YouTube plugin
  youtube: {
    rel: 0, // No related vids
    showinfo: 0, // Hide info
    iv_load_policy: 3, // Hide annotations
    modestbranding: 1, // Hide logos as much as possible (they still show one in the corner when paused)
    // Custom settings from Plyr
    customControls: true,
    noCookie: false, // Whether to use an alternative version of YouTube without cookies
  },
};

export default defaults;
