
# Loyalty Event Delete Reward

Provides metadata when the event `type` is `DELETE_REWARD`.

## Structure

`LoyaltyEventDeleteReward`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loyaltyProgramId` | `string` | Required | The ID of the [loyalty program](/doc/models/loyalty-program.md).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `rewardId` | `string \| undefined` | Optional | The ID of the deleted [loyalty reward](/doc/models/loyalty-reward.md).<br>This field is returned only if the event source is `LOYALTY_API`.<br>**Constraints**: *Maximum Length*: `36` |
| `points` | `number` | Required | The number of points returned to the loyalty account. |

## Example (as JSON)

```json
{
  "loyalty_program_id": "loyalty_program_id0",
  "reward_id": "reward_id4",
  "points": 236
}
```

