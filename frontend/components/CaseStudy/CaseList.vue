<template lang="pug">
.caseListWrapper#casestudy
  .caseListContainer
    h2.caseListHeader Case Studies
    .caseListContent
      .caseListContentItem(@click="showCaseList1=true")
        .caseListContentItemImg
          img(src="~/assets/design/casestudy/casestudy-c01.jpg")
        h4.caseListContentItemTitle Understanding Skincare Consumers for Effective Product Strategy
        p.caseListContentItemContent A leading skincare company gained deep understanding into Chinese beauty consumers to make better product design, communication claims and launch strategy.
      .caseListContentItem(@click="showCaseList2=true")
        .caseListContentItemImg
          img(src="~/assets/design/casestudy/casestudy-c02.jpg")
        h4.caseListContentItemTitle Identify Emerging Food Trend & Discover New Opportunities
        p.caseListContentItemContent A leading global food ingredient provider partnered with flow to identify & predict food trends tobetter shape its product offerings.
      .caseListContentItem(@click="showCaseList3=true")
        .caseListContentItemImg
          img(src="~/assets/design/casestudy/casestudy-c03.jpg")
        h4.caseListContentItemTitle Competitive and Purchase Decision Analysis for Hotel
        p.caseListContentItemContent A prominent hotelier wants to gather competitive and consumer insights to make better product design for its new hotel in China.
      .caseListContentItem(@click="showCaseList4=true")
        .caseListContentItemImg
          img(src="~/assets/design/casestudy/casestudy-c04.jpg")
        h4.caseListContentItemTitle Predicting Consumer Trends and Sales Impact Factors
        p.caseListContentItemContent A global leader is looking at new ways to better utilise unstructured data to predict the next consumer trends and to understand what product attributes drives purchase.
      .caseListContentItem(@click="showCaseList5=true")
        .caseListContentItemImg
          img(src="~/assets/design/casestudy/casestudy-c05.jpg")
        h4.caseListContentItemTitle Understand Consumers Preferences towards Silicone-Free Haircare Products
        p.caseListContentItemContent A global leader investigates what drives consumer behaviour in the silicone-free haircare segment to better design and launch its products
      .caseListContentItem(@click="showCaseList6=true")
        .caseListContentItemImg
          img(src="~/assets/design/casestudy/casestudy-c06.jpg")
        h4.caseListContentItemTitle Uncovering Consumer Behaviours Towards Home Electric Appliances
        p.caseListContentItemContent A leading Japanese home electric appliances company wish to develop a growth strategy, and to understand the consumer behaviour in developing regions in Asia.

  el-dialog(:visible.sync="showCaseList1" width="80%")
    .caseListDetail
      .caseListDetailContainer
        h3.caseListDetailTitle Understanding Skincare Consumers for Effective Product Strategy
        .caseListDetailImg
          img(src="~/assets/design/casestudy/casestudy-c01.jpg")
        .caseListDetailPara
          .caseListDetailTitle Background:
          .caseListContent
            p A prominent personal care company partnered with flow to gain a deep understanding into the online conversations of Chinese consumers. The insights helped the client make data-driven decisions on product designs, communication and launch strategies.
        .caseListDetailPara
          .caseListDetailTitle Solution:
          .caseListContent
            p Using our patented, AI-powered methodology, flow achieved the client’s business objective by utilising advanced natural language processing (NLP) and machine learning algorithms backed by a team of analytical experts. Analysis done helped the client better their existing R&D investments, refocus on packaging for premiumness, uncover their true competitor and rethink the marketing mix.
            p With proprietary access, over 60gb of relevant online public data were extracted daily. Online conversations of Chinese consumers were monitored for 18-months data period. 4 major types of social media platforms were considered with 9 most relevant social media platforms reviewed. 1 Million total conversations were retrieved in total.
        .caseListDetailPara
          .caseListDetailTitle Results:
          .caseListContent
            p
               span.contentSubTitle Brand image analysis:
               span understand the important associations and sentiments with the brand and its competitors, and how they change over the two years.

            p  Client is prompted to re-think about the product roadmap, to reinforce the associations the team would like the consumers to have with the brand.
            p
               span.contentSubTitle Perception driver analysis:
               span understand the main discussion topics and important drivers for certain perception, both positive and negative.
            p  It helps the client to channel the right effort on the right drivers to shape the desired perception.
            p
               span.contentSubTitle Audience analysis:
               span   profile the target audience with rich data, including demographics, interests, skin concerns and beauty care preferences. Deep dive into the conversations different target groups have around the brand.
            p  Client has a better understanding of their target audience, and formulate the product offerings and targeted communications towards different groups.
            p
              span.contentSubTitle Product analysis:
              span analyse the star products in the eyes of consumers with considerations of both conversation volume and rating.
            p This allows the client to focus on the true all-time favorite, while revamping products with poor rating and high conversation volume.

            p
              span.contentSubTitle Channel analysis:
              span identify the most important channel for different types of conversations.

            p This enables the client to reach their target audience at the right place.

  el-dialog(:visible.sync="showCaseList2" width="1140px")
    .caseListDetail
      .caseListDetailContainer
        h3.caseListDetailTitle Identify Emerging Food Trend & Discover New Opportunities
        .caseListDetailImg
          img(src="~/assets/design/casestudy/casestudy-c02.jpg")
        .caseListDetailPara
          .caseListDetailTitle Background:
          .caseListContent
            p Our client is a leading global provider of inspiration to chefs and food service businesses. It delivers professional ingredients, services, and solutions that fulfill culinary needs, commercial challenges, and inspire chefs to satisfy their guests every day.
            p The brand partnered with flow to identify current food trends as well as predict emerging trends to better shape its product offerings to meet demand.
        .caseListDetailPara
          .caseListDetailTitle Solution:
          .caseListContent
            p Through intelligent crawling and big data analytics of a food review site in the Philippines, flow customised an Artificial Intelligence (AI) - powered Food Industry Insight Platform.
            p We achieved the client’s business objective by utilising advanced natural language processing (NLP) and machine learning algorithms backed by a team of analytical experts. flow applies advanced big data analytics to gain multi-dimensional deep insights, which cannot be obtained by traditional statistical analysis. Our years of research have optimised the AI and big data algorithms, enabling us to achieve more accurate results in a shorter time and with less human interaction.
            p The client wants to accelerate its growth by increasing penetration amongst trade partners in the food industry (e.g. restaurants, bakeries). An important starting point is to identify the right opportunities such as trending top dishes, ingredients, shifts in diner preferences, as well as to seize the opportunities.
        .caseListDetailPara
          .caseListDetailTitle Results:
          .caseListContent
            p Our client has better visibility of the dynamic food ingredient market, and is able to monitor it in a timely and sustainable manner.
            p The brand is able to identify the emerging food trend and can introduce innovative ingredients to meet the emerging demand ahead of its competitors.
            p With higher visibility and clear action plan, flow contributes to the company’s growth and help it maintain as one of the market leaders in the industry.

  el-dialog(:visible.sync="showCaseList3" width="1140px")
    .caseListDetail
      .caseListDetailContainer
        h3.caseListDetailTitle Competitive and Purchase Decision Analysis for Hotel
        .caseListDetailImg
          img(src="~/assets/design/casestudy/casestudy-c03.jpg")
        .caseListDetailPara
          .caseListDetailTitle Background:
          .caseListContent
            p A prominent US-based hotel group is developing a new hotel in a South Eastern China city. The hotel group understands the value of conducting market entry research to mitigate the risk involved as hotel development is a long-term, costly investment. The hotel is also aware of the competitive hotelier landscape in that city and wants to know how it can achieve competitive advantage.
        .caseListDetailPara
          .caseListDetailTitle Solution:
          .caseListContent
            p By mining and meshing digital data such as hotel reviews, discussions, customers’ feedbacks, flow combined various signals to form customer journey mapping, customers purchase factors and key differentiation among targeted competitors. flow utilised big data derived from OTAs, Q&A websites, social media platforms, and travel forums to perform this digital ethnography research.
            p Insights Derived:
            p
              span.contentSubTitle 1. Little acts count:
              span Travellers appreciates extra, over-the-top, effort to make their stay feel welcomed. For instance, family travellers often receive bath towels from some competitors that are folded into various animal shapes and such little acts made their stays memorable. The hotel group incorporated this into its standard service after realising the benefits these acts brings.
            p
              span.contentSubTitle 2. Some “standards” cannot be scrimped:
              span Some hotels that are located further from main attractions have consistent, reliable, in-house transportation that is provided free-of-charge for hotel guests. This service is a common expectation but not many of our client’s competitors do this well. Our client, not wanting to fall into this pitfall made by the competitors, decided to plan and monitor this service carefully.

            p
              span.contentSubTitle 3. First impression counts:
              span Travellers expect to be impressed the “grandness” of 5 Stars hotel lobby. Some of the competitors failed in this aspect and this made the travellers disappointed. Our client is pleased to have actual data presented in this research to reaffirm this previously hypothesized factor.
        .caseListDetailPara
          .caseListDetailTitle Results:
          .caseListContent
            p Competitive Analysis: By understanding how the competitors differentiate, our client avoided pitfalls made by its competitors, understood how the competitors market themselves, and the various competitive traits the brand can replicate.
            p Consumer & Product Insight Analysis: Through this research, our client could understand consumers buying journey, what factors hotel consumers care about, how to amplify its unique selling points to exceed customers' expectations, and accurately pinpoint target audience.

  el-dialog(:visible.sync="showCaseList4" width="1140px")
    .caseListDetail
      .caseListDetailContainer
        h3.caseListDetailTitle Predicting Consumer Trends and Sales Impact Factors
        .caseListDetailImg
          img(src="~/assets/design/casestudy/casestudy-c04.jpg")
        .caseListDetailPara
          .caseListDetailTitle Background:
          .caseListContent
            p A global market leader in the personal care industry is on the search for innovative methods to identify and predict consumer trends for the hair care industry in China.
            p Facing ever-changing consumer preferences, ease of new product adoption with new media and e-commerce, brand owners are facing the need to understand their consumers in a more timely and sustainable manner. In this competitive climate, our client is on the search for innovative ways to enable deeper understanding of current consumers trend, predict new trends for growth opportunities and stay alert of new competition in the horizon in order to remain dominant in the personal care segment.
            p Key situations faced by brand owners within the personal care industry
            p
              span 1. The explosion of new media and e-commerce spurs influx of new consumer trends. Consumers are increasingly hungry for new products that can better address their ever-changing needs and the ease of access to global products have further fueled this demand.
            p
              span 2. The rise of boutique brands and aggressive product development by competing mainstream brands cause an exponential increase in product offerings. This competitive landscape creates constant introduction of product differentiations and new competitive battlegrounds. There is a strong need to understand the relationship between product claims and consumers’ purchase drivers in order to drive high impact product development.
            p
              span 3. Brand owners need to introduce new products quicker and with higher frequency in lieu of the market dynamism. Long product development cycle coupled with ever-changing consumer trends led to greater uncertainty in the return of investment in new product development. Solution to predict possible consumer trends to anticipate future consumer demand would better guide category’s strategic planning.

        .caseListDetailPara
          .caseListDetailTitle Solution:
          .caseListContent
            p To address the challenges, flow developed a solution which can bring about better investigation of current consumer trends and drive evidence-based, explainable prediction to future consumer trends. The solution incorporated multi-source big data fusion analytics, specially designed domain-specific ontology, combined with proprietary Explainable Artificial Intelligence advanced modelling to derive key findings.
            p Multi-Source Big Data Fusion: More than 1 million product listings, 15,000 unique products and other data types were used to analyse the hair care landscape.
            p Domain-specific ontology: Close to 5 million lines of sentences were analysed to derive approximately 13,000 product attributes which represents features in the hair care category. The ontology not only cleanses the data to ensure high data veracity but also builds the foundation to detect new product attributes in future.
            p Proprietary Explainable Artificial Intelligence: A domain-specific, explainable neural network model was designed and developed by flow to derive the explanation between the relationship of product attributes, their sales impact factors and sales results of products in the category.
        .caseListDetailPara
          .caseListDetailTitle Results:
          .caseListContent
            p 1. Derived key findings to understand what types of products and product claims drive consumer sales. Detailed findings of these products’ claims and their past, present and future trends are analysed.

            p With clearer understanding of what drives consumers’ purchase, our client is able to adjust its category strategy to capture the market.

            p 2. flow highlighted 2 clusters with 13 potential growth attributes of strategic interest which the brand can adopt to drive sales improvement.
            p Our client is able to strategically focus on their core product strength by identifying the products attributes that have high contribution to online sales.

            p 3. To support our client’s effort in production innovation, flow identified key emerging competitors with predicted high growth as well as top performing mainstream brands to watch for.
            p flow predicted approximately 20 key product attributes to target and this provides a clearer picture for future product development and validation.

  el-dialog(:visible.sync="showCaseList5" width="1140px")
    .caseListDetail
      .caseListDetailContainer
        h3.caseListDetailTitle Understand Consumers Preferences towards Silicone-Free Haircare Products
        .caseListDetailImg
          img(src="~/assets/design/casestudy/casestudy-c05.jpg")
        .caseListDetailPara
          .caseListDetailTitle Background:
          .caseListContent
            p Our client is one of the world’s largest consumer goods company and home to many trusted brands in a wide range of categories including personal care, home care, and personal health care.
            p Driven by high demand for healthy and natural products and ingredients in China, silicone-free hair care product is highly sought after by Chinese consumers. Prior to the launch of the new series of silicone-free products by our client, it is crucial for the brand to tackle challenges below in order to make it a success.
            p 1. Holistic landscape of silicone-free hair care product category in China; Who are the leaders and challengers respectively?
            p 2. Clarity on well-received products, consumers' pain-points and whitespace in the market; How could our client best position their new silicone-free product?
            p 3. Which areas did the client do well and not well in their existing silicone-free product? How can they improve from consumer’s point of view?
        .caseListDetailPara
          .caseListDetailTitle Solution:
          .caseListContent
            p With the aim of providing our client with breadth and depth of insights, flow executed the study in two stages:
            p
              span.contentSubTitle Stage 1 –
              span Market scan for the entire silicone-free product category in China.
            p
              span.contentSubTitle Stage 2 –
              span Deep-dive into the client’s existing silicone-free product; Benchmark the findings with the entire category’s to uncover the gaps and opportunities.
            p Richness and quality of data is the fundamental to start with. flow helped the client to amass more than 260k online conversations across 10 various data sources including social media and e-commerce platforms. After multi-layers of data filtering and cleaning by machine learning algorithms, the well-represented and authentic consumer data was sieved out for analysis.
            p By harnessing advanced Natural Language Processing (NLP) technologies, flow analysed the amassed data in more granular and thorough manner. One of many examples, each product attribute (e.g. foam) and its related opinions (e.g foam is rich and dense) were automatically extracted based on advanced NLP algorithms. Semantic rules were applied to these “attribute-opinion” pairs to ensure that they referred to opinions regarding after-product use. For example, when consumers complained about itchy scalp, our algorithm can differentiate whether it refers to pre-existing condition, or after-use experience.
            p In order to maximize the value of data to reach deeper insights, flow combined the power of AI technology and human domain knowledge. Our analyst team categorised granular consumers reviews (the “attribute-opinion” pairs mentioned above) into a domain-specific structure and ranked each attribute category’s favorability, based on a well-established ranking algorithm. With that, our client was able to pinpoint the predecessor product’s unique selling point and prioritise improvement areas.

        .caseListDetailPara
          .caseListDetailTitle Results:
          .caseListContent
            p At the end of study, flow helped our client to crystalise the silicone-free hair care product category in China. The insights uncovered could be applied to the following areas:
            p
               span.contentSubTitle Brand Positioning:
               span Drivers of consumer’s perception towards key value propositions
            p
               span.contentSubTitle Product Development:
               span Market unmet needs and whitespace

            p
               span.contentSubTitle Marketing Strategy:
               span Targeted consumer persona & emphasis of engagement with KOLs

  el-dialog(:visible.sync="showCaseList6" width="1140px")
    .caseListDetail
      .caseListDetailContainer
        h3.caseListDetailTitle Uncovering Consumer Behaviours Towards Home Electric Appliances
        .caseListDetailImg
          img(src="~/assets/design/casestudy/casestudy-c06.jpg")
        .caseListDetailPara
          .caseListDetailTitle Background:
          .caseListContent
            p flow and an international communications agency were engaged by a leading Japanese home electric appliances company, to develop a growth strategy in China and India. Our client required a thorough understanding of the consumer behaviour toward home appliances, and to evaluate the target segment and strategic positioning in the two highly competitive markets.
        .caseListDetailPara
          .caseListDetailTitle Solution:
          .caseListContent
            p The client's main products which are white appliances, are closely tied to local cultures and lifestyles. Hence, it was essential to deeply understand the Chinese and Indian markets from a consumer's viewpoint. Furthermore, before the start of the project, the client's headquarters and local entities had no clear communication and agreement regarding the market situations.
            p The agency collaborated with flow on this project to leverage on our digital ethnography to fuse large-scale data and uncover insights within the two markets such as consumers' purchase behaviours on home electric appliances and brand associations of competitors as well as their brand based on actual consumers' conversations.
        .caseListDetailPara
          .caseListDetailTitle Results:
          .caseListContent
            p The insights from digital ethnography are impressive and reliable, albeit the harsh reality for the client.
            p By combining our insights with research outcomes from the agency, the client gained better clarity of both markets, which enabled them for data-driven & unbiased business directions.
</template>

<script>
export default {
  name: 'BannerOfMIKA',
  data () {
    return {
      showCaseList1: false,
      showCaseList2: false,
      showCaseList3: false,
      showCaseList4: false,
      showCaseList5: false,
      showCaseList6: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.caseListWrapper{
  width: 100%;
  .caseListContainer{
    width: $percentageWidth;
    max-width: $containerMaxWidth;
    // margin: 100px auto;
    margin: 4rem auto;
    .caseListHeader{
      font-size: 1.6rem;
      text-align: center;
      text-transform: capitalize;
    }
    .caseListContent{
      margin-top: 80px;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
      @media only screen and (max-width: 800px) {
        flex-direction: column;
        width: 90%;
        margin: 50px auto;
      }
      .caseListContentItem{
        width: 31%;
        // flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0px 1%;
        margin-bottom: 50px;
        cursor: pointer;
        @media only screen and (max-width: 800px) {
          width: 100%;
          padding: 0px;
        }
        &:hover{
          color: $mainColor;
          .caseListContentItemTitle, .caseListContentItemContent{
            color: $mainColor;
          }
        }
        .caseListContentItemImg{
          width: 100%;
          img{
            width: 100%;
            margin: 0px;
            padding: 0px;
          }
        }
        .caseListContentItemTitle{
          margin-top: 1rem;
          // font-size: 1rem;
          // margin-top: 1rem;
          // margin-bottom: 1rem;
        }
        .caseListContentItemContent{
          // font-size: 0.8rem;
          margin: 0;
        }
      }
    }
  }
}

.caseListDetail{
  // width: 100%;
  padding: 80px 120px;
  display: flex;
  @media screen and (max-width:800px) {
    padding: 10px;
  }
  .caseListDetailContainer{
    width: 100%;
    // font-size: 16px;
    // line-height: 1.5;
    .caseListDetailImg{
      width: 100%;
      margin-bottom: 20px;
      img{
        width: 100%;
      }
    }
    .caseListDetailTitle{
      text-align: center;
      // font-size: 24px;
      // font-weight: bold;
      margin-bottom: 20px;
    }
    .caseListDetailPara{
      margin-bottom: 40px;
      .caseListDetailTitle{
        text-align: left;
        font-size: 21px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .caseListContent{
        text-align: justify;
        margin-bottom: 30px;
        p{
          margin-bottom: 20px;
          span{
            padding-left: 4px;
          }
        }
        .contentSubTitle{
          padding-left: 0px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
