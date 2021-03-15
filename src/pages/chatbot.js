import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../components/loder";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ChatBot = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (isLoading) {
      return <div>Loading ...</div>;
    }

    if (!isAuthenticated) {
      loginWithRedirect();
      return null;
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  return isAuthenticated ? (
    <Layout>
      <SEO title="re:Bot | Your Account Assistant" />
        <div class="embed-responsive embed-responsive-16by9" style={{height: '100%'}}>
          <iframe className="embed-responsive-item" title="ChatBot" src="https://revivehealth.secure.force.com/DiligentBot__BotMessageExternal" allowFullScreen></iframe>
        </div>
    </Layout>
  ) : (
    <Loader />
  );
};
export default ChatBot;