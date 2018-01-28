declare module "nogi-schedule" {
  export type Category = "handshake" | "web" | "tv" | "radio" | "theatre" | "magazine" | "bd" | "live" | "release";
  export interface ScheduleItem {
    title: string,
    link: string,
    category: Category
  }
  export function getScheduleAsync(): Promise<ScheduleItem[]>;
}