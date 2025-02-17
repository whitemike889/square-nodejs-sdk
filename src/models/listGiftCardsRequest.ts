import { number, object, optional, Schema, string } from '../schema';

/**
 * A request to list gift cards. You can optionally specify a filter to retrieve a subset of
 * gift cards.
 */
export interface ListGiftCardsRequest {
  /**
   * If a type is provided, gift cards of this type are returned
   * (see [GiftCardType]($m/GiftCardType)).
   * If no type is provided, it returns gift cards of all types.
   */
  type?: string;
  /**
   * If the state is provided, it returns the gift cards in the specified state
   * (see [GiftCardStatus]($m/GiftCardStatus)).
   * Otherwise, it returns the gift cards of all states.
   */
  state?: string;
  /**
   * If a value is provided, it returns only that number of results per page.
   * The maximum number of results allowed per page is 50. The default value is 30.
   */
  limit?: number;
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this cursor to retrieve the next set of results for the original query.
   * If a cursor is not provided, it returns the first page of the results.
   * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  cursor?: string;
  /** If a value is provided, returns only the gift cards linked to the specified customer */
  customerId?: string;
}

export const listGiftCardsRequestSchema: Schema<ListGiftCardsRequest> = object({
  type: ['type', optional(string())],
  state: ['state', optional(string())],
  limit: ['limit', optional(number())],
  cursor: ['cursor', optional(string())],
  customerId: ['customer_id', optional(string())],
});
