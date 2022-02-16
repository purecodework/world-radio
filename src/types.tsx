export interface queryParams {
  name?: string;
  countryCode?: string;
  tag?: string;
  offset: number;
  limit: number;
}

// station type defined in API
export interface radio {
  changeId: string;
  id: string;
  name: string;
  url: string;
  urlResolved: string;
  homepage: string;
  favicon: string;
  tags: string[];
  country: string;
  countryCode: string;
  state: string;
  language: string[];
  votes: number;
  lastChangeTime: Date;
  codec: string;
  bitrate: number;
  hls: boolean;
  lastCheckOk: boolean;
  lastCheckTime: Date;
  lastCheckOkTime: Date;
  lastLocalCheckTime: Date;
  clickTimestamp: Date;
  clickCount: number;
  clickTrend: number;
}

export interface radiosList {}
