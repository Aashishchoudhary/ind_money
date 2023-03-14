import React from "react";
import "./Footer.css";

import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_det">
        <div className="footer_logo">
          <img
            width="200px"
            src="https://cdn.indiawealth.in/public/images/fe/IND_logo_white_tm.png"
          ></img>
        </div>
        <div className="footer_app_store">
            <img width="150px" style={{marginLeft:"20px"}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="" />
            <img 
             width='150px' style={{marginLeft:"20px"}}
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Google_Play_Store_badge_FR.svg/2560px-Google_Play_Store_badge_FR.svg.png" alt="" />
        </div>
        <div className="footer_mui">

<div className="footer_mui_icons"><InstagramIcon/></div>
<div className="footer_mui_icons"><LinkedInIcon/></div>
<div className="footer_mui_icons"><TwitterIcon/></div>
<div className="footer_mui_icons"><FacebookIcon/></div>
<div className="footer_mui_icons"><YouTubeIcon/></div>


        </div>
      </div>

      <div className="footer_det_menu">
        <div className="f_menu">
          <h4>Explore Products</h4>
          <p>Mutual Funds</p>
          <p>INDstocks</p>
          <p>US Stocks</p>
          <p>IPO</p>

          <p>Fixed Deposit</p>
          <p>Calculators</p>
        </div>
        <div className="f_menu">
          {" "}
          <h4>Company</h4>
          <p>About Us</p>
          <p>Blog</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Legal & Regulatory</p>
          <p>Grievance Redressal Policy</p>
        </div>
        <div className="f_menu">
          <h4>Company</h4>
          <p>Coustmer Service</p>
        </div>
      </div>

      <div className="footer_det">
        <p>
          All Rights Reserved | © Copyright 2023 Finzoom Investment Advisors
          Private Limited - Investment Advisory Unit (Separately Identifiable
          Unit) : is the holding Company which is registered with Securities
          Exchange Board of India as an investment advisor under SEBI
          (Investment Advisors) Regulations, 2013 (“IA regulations”) vide
          registration no. INA100012190 and is in the services and/or products,
          related to all kind of financial/ financial technology services, by
          using technology or otherwise, including but not limited to wealth
          management, financial technologies, investment advisory services,
          financial advice, financial analytics, distribution services and
          financial information. Finzoom Investment Advisors Private Limited -
          Investment Advisory Unit (Separately Identifiable Unit) [SEBI RIA
          Registration No: INA100012190] BASL Registration No: 1154 [Type of
          Registration: Non-Individual] [Validity of registration: December 17,
          2018-Perpetual] [Address: 616, 6th Floor, Suncity Success Tower, Golf
          Course Extension Road, Sector – 65, Gurugram, Haryana- 122005]
          [Corresponding SEBI local office address: Securities and Exchange
          Board of India, Local Office, First Floor, SCO 127-128, Sector 17C,
          Chandigarh-160017][Principal Officer details: Mr. Gaurav Sharma, Email
          id:principalofficer@indmoney.com]; Compliance Officer: Mr. Sunny Bajaj
          [ARN - 151913] [Platform Partner : BSE (Member code-24801)] [CIN -
          U67190HR2018PTC073294] [GST No : 06AADCF3538Q1Z8] Finzoomers Services
          Private Limited (“Finzoomers”) carries out the business of referrer,
          intermediary, and facilitation, for varied financial services,
          including solicitation of insurance policies as a Corporate
          Agent(Composite). Finzoomers got registered with IRDAI as Corporate
          Agent (Composite) vide registration no. CA0744 dated March 3, 2021.
          Finzoomers also carries out various facilitation activities like
          acting as digital platform for selling fixed deposits, Opening of
          Savings Bank Account, Digital lending platform, foreign remittance
          services in respect to US Stocks trading via tie-ups with various
          Banks/NBFCs and facilitation of US Stocks trading through Stock
          Broker-Dealer like Drivewealth & Alpaca which are registered with USA
          Securities Exchange Commission. [Registered address: 624-625, 6th
          Floor, Suncity Success Tower, Golf Course Extension Road, Sector - 65
          Gurugram – HR- 122005] [IRDAI Corporate Agent (Composite) Registration
          No- CA0744 Validity till - 02/03/2024] [Principal Officer- Mr. Ankur
          Goyal, Principal Officer email id- po@finzoomers.in] [CIN:
          U74990HR2020PTC086201] [GST No: 06AAECF0692E1ZV] [Email id:
          insurancesupport@indmoney.com] [Compliance Officer: Ms. Aayushi
          Agrawal] INDmoney Private Limited is carrying out the business in
          respect to stock broking activities and also carries out the
          activities of depository participant SEBI Registration No.
          INZ000305337 | SEBI Depository Participant Registration No.
          IN-DP-690-2022 Depository Participant ID: CDSL 12095500 | Trading and
          Clearing Member of NSE (90267, M70042) and BSE (6779)|
          AMFIRegistration No: ARN-254564| Registered Office - 616, 6th Floor
          Suncity Success Tower, Sector 65, Gurugram, Haryana-122005 | CIN
          U67100HR2021PTC098653 |Compliance officer: Ameya M. Bhelekar INDmoney
          makes no warranties or representations, express or implied, on
          products and services offered through the platform. It accepts no
          liability for any damages or losses, however, caused in connection
          with the use of, or on the reliance of its advisory or related
          services. Past performance is not indicative of future returns. Please
          consider your specific investment requirements, risk tolerance, goal,
          time frame, risk and reward balance and the cost associated with the
          investment before choosing a fund, or designing a portfolio that suits
          your needs. Performance and returns of any investment portfolio can
          neither be predicted nor guaranteed. Investment in securities market
          are subject to market risks, read all the related documents carefully
          before investing. Brokerage will not exceed the SEBI prescribed limit
          Marketing and distribution of various financial products such as
          loans, deposits and Insurance are powered by Finzoomers Services
          Private Limited. [Digital Banking Partner : SBM Bank] [Terms and
          Conditions] [Toll Free Number- 1800 1033 817] [Customer Care-
          customercare@sbmbank.co.in]
        </p>
      </div>
      <div className="footer_det">
        <p>
          Stocks: All Stocks|Top Gainers|Top Losers|Hot Stocks|Most Active|At 52
          Week High|At 52 Week Low|Bajaj Finance Share Price |Vedanta Share
          Price|HDFC Share Price|Wipro Share Price|Adani Wilmar Share
          Price|Infosys Share Price|Yes Bank Share Price|Tata Steel Share
          Price|ITC Share Price|Zomato Share Price|Tata Motors Share Price|HDFC
          Bank Share Price Stocks Dividend: Vedanta dividend|Tata steel
          dividend|Hindustan zinc dividend|IOC dividend|ITC dividend|BPCL
          dividend|Tata power dividend|Coal india dividend|Sail dividend|TCS
          dividend|NMDC dividend Mutual Funds: Index Funds|Large Cap Funds|Mid
          Cap Funds|Global Funds|Multi Cap Funds|Small Cap Funds|Liquid
          Funds|Ultra Short Funds|Arbitrage Funds|Equity Savings Funds|Balanced
          Funds|Multi Asset Funds|All Mutual Funds|Equity Funds|Debt
          funds|Hybrid Funds|Tax Saving Funds|High Return Mutual funds|Mutual
          funds|SIP Mutual Funds Mutual Funds Guide: NAV|XIRR|Dividend Yield
          Fund|Hedge Funds|Regular vs Direct Mutual Funds|SIP|AUM|Equity vs Debt
          Funds|Systematic Withdrawal Plan|Contra Funds|IDCW|Gilt Funds|Expense
          Ratio|Fund of Funds|Exit Load|Asset Allocation Fund Popular Mutual
          Funds: Parag Parikh Flexi Cap Fund|HDFC Balanced Advantage Fund|Tata
          Digital India Fund|Axis Bluechip Fund|SBI Small Cap Fund US Stocks:
          All US Stocks|US Exchange Traded Funds|US Tech Stocks|High Demand US
          stocks|US Top Gainers|Top Losers|Top Finance US stocks|Top Energy US
          stocks|Top Pharma US stocks|FAANG US Stocks Guide: Invest in Tesla
          from India|Invest in Apple from India |Invest in Amazon from
          India|Liberalised Remittance Scheme (LRS)|US Stock Market Timings|US
          Stock Market Holidays Insurance: Insurance|Term insurance|Health
          Insurance|Super Top Up Insurance IPO Center: IPO|Upcoming IPO Tools:
          All Calculators|Compare Mutual Funds|FD Calculator|EMI Calculator|SIP
          Calculator|Lumpsum Calculator|Gratuity Calculator|Post Office FD
          Calculator|Interest Calculator|Post Office RD Calculator|Post Office
          PPF Calculator|GST Calculator|SWP Calculator|CAGR Calculator|NSC
          Calculator|Income Tax Calculator Mutual Fund investments are subject
          to market risks, read all scheme related documents carefully.
          INDmoney, INDwealth, IND.app, IND.money, INDsave.com are brand and
          product of Finzoom Investment Advisors (P) Limited.
        </p>
      </div>
    </div>
  );
}
