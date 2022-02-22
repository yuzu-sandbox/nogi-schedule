declare module "nogi-schedule" {
  export type Category = "handshake" | "web" | "tv" | "radio" | "theatre" | "magazine" | "bd" | "live" | "release";
  export interface ScheduleItem {
    code: string
    title: string,
    text: string,
    start_time: string
    end_time: string
    date: string
    link: string,
    cate: Category
  }
  export function getScheduleAsync(): Promise<ScheduleItem[]>;
}