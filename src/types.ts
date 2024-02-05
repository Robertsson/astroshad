export type Site = {
    lang : string;
    website : string;
    author: string;
    intro: {
        short:string;
    }
    description: {
        short:string;
        medium:string;
        long:string;
    };
    title: string;
    githubUrl: string;
    nav: {
        main: NavItem[];
        sub: NavItem[];
        links: NavItem[];
    }
}
export type Link = {
  title?: string;
  href?: string;
  disabled?: boolean;
};

export type NavItem = Link & {
    description?: string;
    launched?: boolean;
    external?: boolean;
  } & (
    | {
        href: string;
        items?: never;
      }
    | {
        href?: string;
        items: NavItem[];
      }
  );


  