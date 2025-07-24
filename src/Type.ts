export interface UnsplashImage {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3?: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[]; // can be typed better if needed
  sponsorship: null | object; // You can define a Sponsorship interface if required
  topic_submissions: {
    [key: string]: {
      status: string;
      approved_on: string;
    };
  };
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name?: string;
    portfolio_url?: string;
    bio?: string;
    location?: string;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username?: string;
    total_collections?: number;
    total_likes?: number;
    total_photos?: number;
    accepted_tos?: boolean;
    for_hire?: boolean;
    social?: {
      instagram_username?: string;
      portfolio_url?: string;
      twitter_username?: string;
      paypal_email?: string;
    };
  };
  slug: string;
  asset_type: string;
  alternative_slugs: {
    [lang: string]: string;
  };
  breadcrumbs: any[];
}
