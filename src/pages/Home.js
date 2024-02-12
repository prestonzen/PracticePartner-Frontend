import React from "react";
import SectionWithTextAndPicture from "../components/SectionWithTextAndPicture";
import SectionWithText from "../components/SectionWithText";

export default function Home() {
  return (
    <div className="flex-col px-4 py-4 mx-4 my-4">
      <SectionWithTextAndPicture
        title="Your virtual business coach for private practice entrepreneurs"
        subtitle="Embark on Your Private Practice Journey with Confidence"
        text="At Practice Partner, we understand the challenges of starting a private practice.
        Our Al-driven platform is designed to be your reliable guide through every step,
        offering personalized advice, tools, and resources tailored to your unique business needs."
        buttonText="Get Started"
        buttonLink="/chat"
        imageSource="chat.png"
        imageAlt="Chatting Picture"
        textOnLeft={true}
      />
      <SectionWithTextAndPicture
        // className="my-6"
        title="Your Virtual Business Coach"
        subtitle="Expert Advice at Your Fingertips"
        text="Powered by advanced Al similar to ChatGPT, our virtual coach is trained to provide expert guidance on crucial aspects of running a private practice,
         from incorporation to marketing strategies. Get answers to your business questions anytime, anywhere."
        buttonText="Talk to your coach"
        buttonLink="/chat"
        imageSource="ai.png"
        imageAlt="Chatting Picture"
        textOnLeft={true}
      />
      <SectionWithTextAndPicture
        title="Logo Generation"
        subtitle="Unleash Your Brand's Identity"
        text={
          <>
            <p>
              Discover the future of logo design for your practice with Practice
              Partner. Our AI Business Strategist streamlines logo creation,
              offering personalized, AI-generated designs that capture the
              essence of your brand.
            </p>
            <br />
            <p>
              <strong>How It Works:</strong>
            </p>

            <ol>
              <li>
                <strong>Tailored Interaction:</strong> Share your style, colors,
                and vision through an engaging dialogue with Practice Partner.
              </li>
              <li>
                <strong>Customized Designs:</strong> Receive a variety of
                AI-crafted logo options, each reflecting your unique brand
                identity.
              </li>
              <li>
                <strong>Easy Revisions:</strong> Fine-tune your favorite design
                with simple, guided modifications.
              </li>
              <li>
                <strong>Seamless Web Integration:</strong> Effortlessly
                incorporate your new logo into your online presence.
              </li>
            </ol>
            <br />
            <p>
              <strong>Why Choose Us?</strong>
            </p>

            <ul>
              <li>
                <strong>Fast & Cost-Effective:</strong> Save time and money with
                streamlined, AI-powered design processes.
              </li>
              <li>
                <strong>Personalized For Private Practices:</strong> Specially
                tailored for entrepreneurs like you building a private practice,
                ensuring relevance and impact.
              </li>
              <li>
                <strong>Quality and Precision:</strong> Leverage AI for
                professional, high-quality logo options.
              </li>
            </ul>
            <br />
            <p>
              Transform your practice's branding with Practice Partner - where
              AI meets creativity.
            </p>
          </>
        }
        buttonText="Create your own logo now"
        buttonLink="/chat"
        imageSource="logos.png"
        imageAlt="Logos Picture"
        textOnLeft={false}
      />
      <SectionWithText
        title="Comprehensive Business Advisor"
        text={<>
        <p style={{ fontSize: '1.5em' }}>All-in-One Entrepreneurial Support</p>
          <ul>
        <li><strong>Incorporation Guidance:</strong> Navigate the complexities of setting up your practice.</li>
        <li><strong>Pricing Strategies:</strong> Learn how to effectively price your services.</li>
        <li><strong>Website Creation Tips:</strong> Establish a strong online presence.</li>
        <li><strong>Effective Marketing Strategies:</strong> Reach your target audience and grow your client base.</li>
        <li><strong>Operational Tools Suggestions:</strong> Streamline your day-to-day management.</li>
        <li><strong>Tax and Legal Compliance:</strong> Stay informed about your fiscal responsibilities.</li>
      </ul>
        </>}
        buttonText="See More of Our Features"
        buttonLink="/logo-design"
      />

    </div>
  );
}
