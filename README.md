# Amazon Vendor Central

> EDI and API Service

## Overview

MaidenLane AS2/VAN Service

## Amazon Vendor Central EDI Requirements

Amazon Vendor Central relies heavily on EDI for the document exchange necessary to place and fulfill orders. To get started on EDI, you'll need a Vendor Central Account. Once you have one, you'll log in and ask the Amazon Administrator for access to the EDI Self-Service Startup.

Vendor Central will then take you through a self-service survey to set up your connection with Amazon. As you fill out your survey, you'll need the following information at hand.

### Product IDs and Measurement Codes

Start by specifying the item identifiers and units of measure you'll use when orders are sent from Amazon. They'll give you a few options for product codes (shown below), and you can decide which you want to use. You'll use these Label codes in your EDI documents when you send them to Amazon. Ideally, you should choose something that makes sense for your organization and is easy to obtain from your back-end systems.

#### Product codes

Amazon ASIN
UPC
GTIN
ISBN-10
VEndor SKU
EAN/ESBN-13
Units of Measurement

EA (Each)
CA (Case)
UN (Unit)
PE (Pounds Equivalent)
Sender/Receiver IDs

Any EDI trading partner, including Amazon, will require you to set up Sender/Receiver IDs to use when processing EDI documents so each side knows who the message is sent from and where/who to send the messages. These consist of a Qualifier and an ID number.

> An example of the qualifier and ID would look like:

`Qualifier: ZZ ID: LB243657`

If you want to use a specific type of number, you may need to use a specified qualifier. For example, you must specify 01 for a DUNS number or 30 for a Federal Tax Identification Number. In many cases, you might choose ZZ as your qualifier because it doesn't require any particular type of ID. This allows you to pick IDs that make the most sense to the human eye.

### Item Information

Before you start using the Amazon Vendor Central platform to process actual orders, Amazon will allow you to run tests to make sure the EDI connection is working properly by sending test documents for you to process. For example, Amazon might send you a purchase order (EDI 850) for a valid order, and the test will make sure you correctly send the PO acknowledgement (EDI 855) in return. To perform this testing, you'll need to set up item information.

Examples of item information you may choose to define include:

In-stock item
Discontinued item
Invalid item
Back order item

Along with these items, you will include: Cost, List Price, and Case Quantity. Make sure these identifiers match what you set up in your test system.

## Connection

Specify the type of connection you want to use between your back-end systems and Amazon Vendor Central.

Your choices are:
AS2
Amazon-Hosted SFTP
Value-Added Network (VAN).

## Amazon Vendor Central Required EDI Documents

You can use a number of documents in the Vendor Central portal. These are the most commonly required Amazon EDI documents:

#### Invoice EDI 810

Provides all information Amazon needs to pay for the order, including item prices, payment terms, remit to address and so on.

#### Inventory EDI 846

Provides all cost and inventory quantities to be sold to Amazon.
Purchase Order EDI 850: Amazon uses this to place orders. The document includes information such as order type, products ordered, ship-to location, and shipping methods.

#### PO Acknowledgement EDI 855

Provides updates on the status of the order received. Here you can note what items are accepted, back ordered, rejected or changed and provide shipping and delivery times.

#### Shipment EDI 856

Lists all items being shipped, package IDs, tracking information, bill of lading, and other shipping details.

To fully automate your Amazon Vendor Central operations, you may include the following additional EDI documents:

X12 EDI 753 Request for Routing Instructions
X12 EDI 846 Inventory Inquiry/Advice
X12 EDI 852 Product Activity Report
X12 EDI 860 Purchase Order Change Request
X12 EDI 865 Purchase Order Change Request Acknowledgement

**Vendor Central ** will require you to complete a survey to specify each document, and you can test these documents in the Amazon portal.

### Amazon EDI Integration

Integrate Amazon EDI Effectively with Your Backend Systems

Amazon has stringent guidelines for filling orders and is quite punitive if data is late or inaccurate. So, you'll need reliable and resilient integration between EDI and your backend ERP, e-commerce and logistics systems to avoid costly chargebacks:

1% of cost for late PO acknowledgements or POA changes
$5 to $150 for a late ASN
2% to 6% of cost for non-compliant ASNs

With web retailers typically pulling in net margins of 0.5% to 3.5%, these charges could cost you 25% to 200% of your potential net profit.

An out-of-the-box application workflow engine can provide the requisite tight integration. Such a workflow engine can enable you to automate your critical transactions between Amazon Vendor Central and your backend systems to ensure reliable and accurate order-to-cash & fulfillment processes with Amazon.

MaidenLane includes a workflow engine that can:

Easily provide accurate product and catalog details to Amazon via EDI
Realize accurate, reliable, and compliant AS2/EDI interactions with Amazon
Eliminate SLA violations and costly chargebacks due to non-compliant EDI or data errors
Automate ASNs, POAs and other business process transactions
Effectively get your products in front of hundreds of potential customers
MaidenLane: Simplified Amazon-EDI Integration and Out-of-the-Box workflow engines
MaidenLane is an intuitive EDI solution backed by an experienced team that's supported countless EDI partner integrations, including many with Amazon. With a library of prepackaged workflow engines, MaidenLane helps you quickly set up your connections between Amazon EDI and your backend systems.

MaidenLane has everything you need for Amazon EDI:

AS2 workflow engine for direct communication with Amazon
X12 workflow engine for incoming and outgoing EDI document translation
CSV, Excel, XML, and JSON workflow engines to auto-generate Amazon EDI documents from business formats and map Amazon EDI documents into usable formats
Database and application workflow engines to connect Amazon EDI directly to your backend systems

### BPMN Workflow Engine

The MaidenLane Amazon Direct Fulfillment offers pre-configured workflow engines that translate all the core Amazon EDI documents and allow you to automatically generate Amazon EDI files from documents in traditional SQL database such as Postgres or MySQL and translate Amazon EDI documents into SQL-friendly flat files that are automatically dropped right into your database. This workflow covers:

Invoice
Inventory Inquiry/Advice
Purchase Orders
Purchase Order Acknowledgement
Advance Shipment Notices

## License

Copyright 2020 - FreightTrust and Clearing Corporation
