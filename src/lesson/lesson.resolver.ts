import { Resolver, Query } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";

@Resolver(of => LessonType)
export class LessonResolver {

  @Query(returns => LessonType)
  lesson() {
    return {
      id: "h8hgt8y8h",
      name: "Physical class",
      startDate: (new Date()).toISOString(),
      endDate: (new Date()).toISOString()
    }
  }
}