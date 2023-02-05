export interface IPost {
  title: string;
  slug: string;
  date: string;
  image: string;
  author: string;
  tags: string[];
  authorImg: string;
  excerpt: string;
  categories: string[];
  previousPost?: string;
  nextPost?: string;
}

export interface ISocialMediaHandles {
  facebook?: string;
  tumblr?: string;
  reddit?: string;
  instagram?: string;
  discord?: string;
  kik?: string;
}

export interface IAuthor {
  name: string;
  slug: string;
  asl: string;
  displayPicture: string;
  briefIntroduction: string;
  socialMediaHandles: ISocialMediaHandles;
}
export interface IClassified {
  name: string;
  slug: string;
  dp: string;
  basicInfo: { age: number; gender: string; country: string };
  briefIntro: string;
  rpingPreference: {
    grammarCompetence: string;
    desiredThemes: string[];
    undesiredThemes: string[];
    plotConstructionMethod: string[];
    desiredReplyLength: string[];
    desiredRPMethod: string[];
    desiredRPLength: string[];
    replyPerspective: string[];
    languagePrefered: string[];
    openForMultipleCharacters: 'Yes' | 'No';
  };
  sexualPreference: {
    orientation: string;
    domSubRole: string;
    kinks: string[];
    maybe: string[];
    limits: string[];
  };
  characterPreference: {
    self: {
      age: string[];
      religion: string[];
      gender: string[];
    };
    partner: {
      age: string[];
      religion: string[];
      gender: string[];
    };
  };
  likeToPlayOn: string[];
  contacts: ISocialMediaHandles;
  howToContact: string;
}
