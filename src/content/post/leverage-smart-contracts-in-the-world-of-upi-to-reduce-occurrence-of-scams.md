---
publishDate: 2021-11-06T19:52:21Z
author: Kamal Gaur
title: “Leverage smart contracts in the world of UPI to reduce occurrence of scams” 
excerpt: As the UPI payment ecosystem in India has grown by leaps & bounds in the past few years, one of the challenges that users are… 
category: 944,921,924,930
---

As the UPI payment ecosystem in India has grown by leaps & bounds in the past few years, one of the challenges that users are facing is the _finality_ of transactions, or what one would call, the _irreversibility of transactions_ for the sender.

This has led to an uptick in online scams, primarily driven by social engineering, where trusting individuals are but a phone call away from some creative scammer looking to find his next victim.

In many cases, scams are made easier due to the asynchronous nature of the deal – online transactions can happen instantly, whereas the physical delivery of goods/services takes time. Some of the most common scams are where the seller decides to renege on his/her end of the bargain, leaving the buyer hanging after the payment has been made.

However, we also should not presume that the pendulum should swing completely in the opposite direction – where no buyer should be expected to make any payment till the time the delivery is made, because that will lead to its own set of challenges (as popularized by prank calls to restaurants to order expensive food to someone else’s address without their knowledge).

Hence, we should find a middle path – one that **expects a certain level of intent to be shown, without necessarily putting one party completely at the mercy of the other**.

One of the approaches worth exploring towards _mitigating this issue with finality that arises in UPI is to leverage smart contracts_, not unlike the ways they are used on blockchain networks like Ethereum. However, do note that since the actual transaction is actually being effected in the offline world, these smart contracts would need to be human-and-code-driven, not purely code-driven.

A simplistic example could be as under –

Note: Scammer = Seller = Receiver of money

1. This approach is driven from the buyer side. Upon finalizing an agreement to purchase goods/services, the _buyer initiates a transaction that loads money from their account into a smart contract using UPI_ and **_signs_** the transaction with an “**_offer to pay_**” label with a certain “_agreed upon time window_“
2. Buyer **_sends the link_** to this smart contract to the seller, who can view that the funds have been loaded
3. Seller confirms “acceptance” of the _order_ and the _expected timelines_ by signing the transaction with an “**_intent to deliver_**” label along
4. Seller _then delivers on the goods/services_ as promised to the buyer, and **_signs_** the transaction with a “**_confirmation of goods/services delivered_**” label and also _captures proof of delivery_ either in the form of photos or a physical signature
5. At time of delivery, buyer confirms “_receipt of goods/services_” and **_signs_** the transaction with a “**_confirmation of goods/services received_**” label
6. **_Signing_** the transaction _executes the smart contract_, and the funds are instantly transferred from the smart contract to the seller’s account.

Note: The _final signature on the transaction executes the entire smart contract_, and the funds are instantly transferred from the smart contract to the seller’s account.

| **Actor** | **Activity**                             | **Action**                        | **Label**                                      |
| --------- | ---------------------------------------- | --------------------------------- | ---------------------------------------------- |
| Buyer     | load money into smart contract using UPI | sign –> load INR                  | “_offer to pay_” + “_agreed upon time window_“ |
| Buyer     | send link to smart contract to seller    | share contract                    |                                                |
| Seller    | confirm acceptance of order              | sign –> accept contract           | “_intent to deliver_” + “_expected timelines_“ |
| Seller    | deliver goods/services                   | sign –> confirm delivery made     | “_confirmation of goods/services delivered_“   |
| Buyer     | receives goods/services                  | sign –> confirm delivery received | “_confirmation of goods/services received_“    |

This mitigates the problem of bad actors in a couple of different ways –

* **Bad actor** on **buyer** side = **No intention of** making the **actual purchase**  
   * This approach requires the person _**to load fiat currency into the smart contract**_, thereby requiring liquidity in the bank + blocking it for an X amount of time
* **Bad actor** on **seller** side = **No intention of** making the **actual delivery**  
   * The problem of **_asynchronous delivery can be tackled by using timelocks that automate the flow of funds_** away from buyer towards the seller, with checks and balances along the way.  
   * To make this process a little more robust in terms of showing serious intent, one can use timelocks for managing the automated flow of transactions –  
         * Funds loaded by buyer into smart contract under “_offer to buy_” are **locked for a period of 1 hour** during which the seller has to sign with “_intent to deliver_“.  
   * Once seller signs “_intent to deliver_“, the **“** _**agreed upon time window**_**” kicks in**, and _**if seller does not deliver within time, then the funds are automatically released**_ back to the buyer.  
   * However, if seller signs the transaction with “_confirmation of goods/services delivered_” within the agreed timeline, then **_buyer has 1 hour to contest the same._**  
   * In case the buyer misses that window to contest, _**funds are automatically transferred**_ from the smart contract to the seller.  
   * In case the **_buyer has not received the products/services_**, and they sign transaction as _**“**_ **_no confirmation of goods/services delivered_** _**“**_ within the 1 hour window, then **_money is blocked and neither buyer nor seller have access to the funds for 72 hours_**.  
   * At this point, the matter is also **_automatically sent to an offline 3rd-party adjudicator_** who has to investigate and take a decision based on evidence that is to be provided by both sides.  
   * Based on the decision taken by the adjudicator, the **_money is automatically transferred_** over to the right recipient (**_after deduction of adjudicator fees_**).  
   * Note: _Since this will mean that not 100% of the transaction value will be returned_ to either side, it is _expected that both buyers and sellers will tend to be good actors_ in every transaction.

To recap, it would **_not be fair (or practical) to_** _**expect that buyers should never have to make any sort of financial transaction (or gesture) to prove their intent**_, and **_that sellers should be expected to incur cost of rejection/return as a cost of doing business_**.