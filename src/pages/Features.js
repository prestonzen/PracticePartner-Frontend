import React from 'react';
import SectionWithTextAndPicture from '../components/SectionWithTextAndPicture';
import NewsletterForm from '../components/NewsletterForm';

const Features = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl font-semibold mb-24 mt-8">Features</h1>
      <SectionWithTextAndPicture
        title="How can Practice Partner help me start my practice?"
        subtitle=""
        text=""
        buttonText=""
        buttonLink="/feature1"
        imageSource="/feature1.png"
        imageAlt="Feature 1"
        textOnLeft={true}
      />
      <SectionWithTextAndPicture
        title="How would Practice Partner help me create a logo, website, or other technology I need for my practice?"
        subtitle=""
        text=""
        buttonText=""
        buttonLink="/feature2"
        imageSource="/feature2.png"
        imageAlt="Feature 2"
        textOnLeft={true}
      />
      <SectionWithTextAndPicture
        title="Can Practice Partner help me with pricing my services?"
        subtitle=""
        text=""
        buttonText=""
        buttonLink="/feature3"
        imageSource="/feature3.png"
        imageAlt="Feature 3"
        textOnLeft={true}
      />
      <NewsletterForm />
    </div>
  );
};

export default Features;
