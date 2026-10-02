(function () {
  function scrollTimelineToEnd() {
    document.querySelectorAll('.horizontal-timeline-wrap').forEach(function (timeline) {
      timeline.scrollLeft = timeline.scrollWidth - timeline.clientWidth;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scrollTimelineToEnd, { once: true });
  } else {
    scrollTimelineToEnd();
  }
})();
