declare namespace DDB {
  interface Lesson {
    id: string;
    summary?: string;
    keyword_to_resources?: string;
  }

  interface LessonItem {
    id: { S: string };
    keyword_to_resources?: {
      M: Record<
        string,
        {
          L: {
            M: {
              title: { S: string };
              url: { S: string };
            };
          }[];
        }
      >;
    };
    summary?: { S: string };
  }
}
