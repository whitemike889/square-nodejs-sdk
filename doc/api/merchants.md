# Merchants

```ts
const merchantsApi = client.merchantsApi;
```

## Class Name

`MerchantsApi`

## Methods

* [List Merchants](/doc/api/merchants.md#list-merchants)
* [Retrieve Merchant](/doc/api/merchants.md#retrieve-merchant)


# List Merchants

Returns `Merchant` information for a given access token.

If you don't know a `Merchant` ID, you can use this endpoint to retrieve the merchant ID for an access token.
You can specify your personal access token to get your own merchant information or specify an OAuth token
to get the information for the  merchant that granted you access.

If you know the merchant ID, you can also use the [RetrieveMerchant](/doc/api/merchants.md#retrieve-merchant)
endpoint to get the merchant information.

```ts
async listMerchants(
  cursor?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListMerchantsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `number \| undefined` | Query, Optional | The cursor generated by the previous response. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListMerchantsResponse`](/doc/models/list-merchants-response.md)

## Example Usage

```ts
const cursor = 210;
try {
  const { result, ...httpResponse } = await merchantsApi.listMerchants(cursor);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Merchant

Retrieve a `Merchant` object for the given `merchant_id`.

```ts
async retrieveMerchant(
  merchantId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveMerchantResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The ID of the merchant to retrieve. If the string "me" is supplied as the ID,<br>then retrieve the merchant that is currently accessible to this call. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveMerchantResponse`](/doc/models/retrieve-merchant-response.md)

## Example Usage

```ts
const merchantId = 'merchant_id0';
try {
  const { result, ...httpResponse } = await merchantsApi.retrieveMerchant(merchantId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

