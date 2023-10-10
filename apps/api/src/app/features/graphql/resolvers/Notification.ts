import {Query, Resolver} from "@nestjs/graphql";
import {UseGuards} from "@nestjs/common";
import {CurrentUser, RequestUser, RolesGuard} from "@zen/nest-auth";
import gql from "graphql-tag";

export const typeDefs = gql`
  extend type Query {
    userNotifications: Notification!
  }
`

@Resolver()
@UseGuards(RolesGuard('User'))
export class NotificationResolver {

  @Query()
  @UseGuards(RolesGuard('User'))
  async userNotifications(@CurrentUser() reqUser: RequestUser) {
    // const notifications =
    return {};
  }
}
