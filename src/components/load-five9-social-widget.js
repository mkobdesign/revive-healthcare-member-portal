const loadFive9SocialWidget = (callback) => {
  const existingScript = document.getElementById('five9SocialWidget');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'https://app.five9.com/consoles/SocialWidget/five9-social-widget.min.js';
    script.id = 'five9SocialWidget';
    document.body.appendChild(script);
    script.onload = () => { 
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};
export default loadFive9SocialWidget;