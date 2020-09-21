# 856

Key Data Elements You'll Find in a Purchase Order Acknowledgment/Request:

AI - Add Additional Item(s)
CA - Changes To Line Items
PC - Price Change
QD - Quantity Decrease
QI - Quantity Increase

Additional Data Also Included in the Purchase Order Acknowledgment/Request:

DR - Item Accepted - Date Rescheduled
IA - Item Accepted
IC - Item Accepted - Changes Made
ID - Item Deleted
IQ - Item Accepted - Quantity Changed

## Segments

ISA05 - Sender ID Qualifier
ISA06 - Sender Identifier
ISA07 - Receiver ID Qualifier
ISA08 - Receiver Identifier
Review the Functional Group Settings for Outgoing Documents
Ensure the following segments contain the correct information:

GS02 - Sender Identifier
GS03 - Receiver Identifier
Since outgoing documents are sent from the vendor to Amazon, the value VENDOR is pre configured as the Sender Identifier, and AMAZONDS as the Receiver Identifier.
