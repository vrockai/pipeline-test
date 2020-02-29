const libxmljs = require("libxmljs");
const striptags = require("striptags");
const libxml = require("jsdom");
const xml = `<?xml version="1.0" ?>
<!DOCTYPE PubmedArticleSet PUBLIC "-//NLM//DTD PubMedArticle, 1st January 2019//EN" "https://dtd.nlm.nih.gov/ncbi/pubmed/out/pubmed_190101.dtd">
<PubmedArticleSet>
  <PubmedArticle>
    <MedlineCitation Status="In-Process" Owner="NLM">
      <PMID Version="1">31831639</PMID>
      <DateRevised>
        <Year>2019</Year>
        <Month>12</Month>
        <Day>16</Day>
      </DateRevised>
      <Article PubModel="Print">
        <Journal>
          <ISSN IssnType="Electronic">1095-9203</ISSN>
          <JournalIssue CitedMedium="Internet">
            <Volume>366</Volume>
            <Issue>6471</Issue>
            <PubDate>
              <Year>2019</Year>
              <Month>12</Month>
              <Day>13</Day>
            </PubDate>
          </JournalIssue>
          <Title>Science (New York, N.Y.)</Title>
          <ISOAbbreviation>Science</ISOAbbreviation>
        </Journal>
        <ArticleTitle>Depletion of microbiome-derived molecules in the host using 
          <i>Clostridium</i> genetics.
        </ArticleTitle>
        <ELocationID EIdType="pii" ValidYN="Y">eaav1282</ELocationID>
        <ELocationID EIdType="doi" ValidYN="Y">10.1126/science.aav1282</ELocationID>
        <Abstract>
          <AbstractText>The gut microbiota produce hundreds of molecules that are present at high concentrations in the host circulation. Unraveling the contribution of each molecule to host biology remains difficult. We developed a system for constructing clean deletions in 
            <i>Clostridium</i> spp., the source of many molecules from the gut microbiome. By applying this method to the model commensal organism 
            <i>Clostridium sporogenes</i>, we knocked out genes for 10 
            <i>C. sporogenes</i>-derived molecules that accumulate in host tissues. In mice colonized by a 
            <i>C. sporogenes</i> for which the production of branched short-chain fatty acids was knocked out, we discovered that these microbial products have immunoglobulin A-modulatory activity.
          </AbstractText>
          <CopyrightInformation>Copyright © 2019 The Authors, some rights reserved; exclusive licensee American Association for the Advancement of Science. No claim to original U.S. Government Works.</CopyrightInformation>
        </Abstract>
        <AuthorList CompleteYN="Y">
          <Author ValidYN="Y">
            <LastName>Guo</LastName>
            <ForeName>Chun-Jun</ForeName>
            <Initials>CJ</Initials>
            <Identifier Source="ORCID">0000-0002-7227-4591</Identifier>
            <AffiliationInfo>
              <Affiliation>Department of Bioengineering and ChEM-H, Stanford University, Stanford, CA 94305, USA.</Affiliation>
            </AffiliationInfo>
            <AffiliationInfo>
              <Affiliation>Jill Roberts Institute for Research in Inflammatory Bowel Disease, Department of Medicine, Weill Cornell Medicine, NY 10021, USA.</Affiliation>
            </AffiliationInfo>
          </Author>
          <Author ValidYN="Y">
            <LastName>Allen</LastName>
            <ForeName>Breanna M</ForeName>
            <Initials>BM</Initials>
            <Identifier Source="ORCID">0000-0002-4830-6792</Identifier>
            <AffiliationInfo>
              <Affiliation>Graduate Program in Biomedical Sciences, Departments of Otolaryngology and Microbiology and Immunology, Helen Diller Family Comprehensive Cancer Center, Parker Institute for Cancer Immunotherapy, University of California, San Francisco, San Francisco, CA 94143, USA.</Affiliation>
            </AffiliationInfo>
            <AffiliationInfo>
              <Affiliation>Chan Zuckerberg Biohub, San Francisco, CA 94158, USA.</Affiliation>
            </AffiliationInfo>
          </Author>
          <Author ValidYN="Y">
            <LastName>Hiam</LastName>
            <ForeName>Kamir J</ForeName>
            <Initials>KJ</Initials>
            <Identifier Source="ORCID">0000-0002-1956-0257</Identifier>
            <AffiliationInfo>
              <Affiliation>Graduate Program in Biomedical Sciences, Departments of Otolaryngology and Microbiology and Immunology, Helen Diller Family Comprehensive Cancer Center, Parker Institute for Cancer Immunotherapy, University of California, San Francisco, San Francisco, CA 94143, USA.</Affiliation>
            </AffiliationInfo>
            <AffiliationInfo>
              <Affiliation>Chan Zuckerberg Biohub, San Francisco, CA 94158, USA.</Affiliation>
            </AffiliationInfo>
          </Author>
          <Author ValidYN="Y">
            <LastName>Dodd</LastName>
            <ForeName>Dylan</ForeName>
            <Initials>D</Initials>
            <AffiliationInfo>
              <Affiliation>Department of Pathology, Stanford University School of Medicine, Stanford, CA 94305, USA.</Affiliation>
            </AffiliationInfo>
            <AffiliationInfo>
              <Affiliation>Department of Microbiology and Immunology, Stanford University School of Medicine, Stanford, CA 94305, USA.</Affiliation>
            </AffiliationInfo>
          </Author>
          <Author ValidYN="Y">
            <LastName>Van Treuren</LastName>
            <ForeName>Will</ForeName>
            <Initials>W</Initials>
            <AffiliationInfo>
              <Affiliation>Department of Microbiology and Immunology, Stanford University School of Medicine, Stanford, CA 94305, USA.</Affiliation>
            </AffiliationInfo>
            <AffiliationInfo>
              <Affiliation>Chan Zuckerberg Biohub, San Francisco, CA 94158, USA.</Affiliation>
            </AffiliationInfo>
          </Author>
          <Author ValidYN="Y">
            <LastName>Higginbottom</LastName>
            <ForeName>Steven</ForeName>
            <Initials>S</Initials>
            <Identifier Source="ORCID">0000-0002-4609-6840</Identifier>
            <AffiliationInfo>
              <Affiliation>Department of Microbiology and Immunology, Stanford University School of Medicine, Stanford, CA 94305, USA.</Affiliation>
            </AffiliationInfo>
            <AffiliationInfo>
              <Affiliation>Chan Zuckerberg Biohub, San Francisco, CA 94158, USA.</Affiliation>
            </AffiliationInfo>
          </Author>
          <Author ValidYN="Y">
            <LastName>Nagashima</LastName>
            <ForeName>Kazuki</ForeName>
            <Initials>K</Initials>
            <Identifier Source="ORCID">0000-0002-8593-136X</Identifier>
            <AffiliationInfo>
              <Affiliation>Department of Bioengineering and ChEM-H, Stanford University, Stanford, CA 94305, USA.</Affiliation>
            </AffiliationInfo>
          </Author>
          <Author ValidYN="Y">
            <LastName>Fischer</LastName>
            <ForeName>Curt R</ForeName>
            <Initials>CR</Initials>
            <Identifier Source="ORCID">0000-0003-3386-9813</Identifier>
            <AffiliationInfo>
              <Affiliation>Department of Bioengineering and ChEM-H, Stanford University, Stanford, CA 94305, USA.</Affiliation>
            </AffiliationInfo>
            <AffiliationInfo>
              <Affiliation>Chan Zuckerberg Biohub, San Francisco, CA 94158, USA.</Affiliation>
            </AffiliationInfo>
          </Author>
          <Author ValidYN="Y">
            <LastName>Sonnenburg</LastName>
            <ForeName>Justin L</ForeName>
            <Initials>JL</Initials>
            <Identifier Source="ORCID">0000-0003-2299-6817</Identifier>
            <AffiliationInfo>
              <Affiliation>Department of Microbiology and Immunology, Stanford University School of Medicine, Stanford, CA 94305, USA.</Affiliation>
            </AffiliationInfo>
            <AffiliationInfo>
              <Affiliation>Chan Zuckerberg Biohub, San Francisco, CA 94158, USA.</Affiliation>
            </AffiliationInfo>
          </Author>
          <Author ValidYN="Y">
            <LastName>Spitzer</LastName>
            <ForeName>Matthew H</ForeName>
            <Initials>MH</Initials>
            <Identifier Source="ORCID">0000-0002-5291-3819</Identifier>
            <AffiliationInfo>
              <Affiliation>Graduate Program in Biomedical Sciences, Departments of Otolaryngology and Microbiology and Immunology, Helen Diller Family Comprehensive Cancer Center, Parker Institute for Cancer Immunotherapy, University of California, San Francisco, San Francisco, CA 94143, USA. fischbach@fischbachgroup.org matthew.spitzer@ucsf.edu.</Affiliation>
            </AffiliationInfo>
            <AffiliationInfo>
              <Affiliation>Chan Zuckerberg Biohub, San Francisco, CA 94158, USA.</Affiliation>
            </AffiliationInfo>
          </Author>
          <Author ValidYN="Y">
            <LastName>Fischbach</LastName>
            <ForeName>Michael A</ForeName>
            <Initials>MA</Initials>
            <Identifier Source="ORCID">0000-0003-3079-8247</Identifier>
            <AffiliationInfo>
              <Affiliation>Department of Bioengineering and ChEM-H, Stanford University, Stanford, CA 94305, USA. fischbach@fischbachgroup.org matthew.spitzer@ucsf.edu.</Affiliation>
            </AffiliationInfo>
            <AffiliationInfo>
              <Affiliation>Chan Zuckerberg Biohub, San Francisco, CA 94158, USA.</Affiliation>
            </AffiliationInfo>
          </Author>
        </AuthorList>
        <Language>eng</Language>
        <GrantList CompleteYN="Y">
          <Grant>
            <GrantID>R01 DK110174</GrantID>
            <Acronym>DK</Acronym>
            <Agency>NIDDK NIH HHS</Agency>
            <Country>United States</Country>
          </Grant>
          <Grant>
            <GrantID>DP1 DK113598</GrantID>
            <Acronym>DK</Acronym>
            <Agency>NIDDK NIH HHS</Agency>
            <Country>United States</Country>
          </Grant>
          <Grant>
            <GrantID>R01 DK101674</GrantID>
            <Acronym>DK</Acronym>
            <Agency>NIDDK NIH HHS</Agency>
            <Country>United States</Country>
          </Grant>
          <Grant>
            <GrantID>DP5 OD023056</GrantID>
            <Acronym>OD</Acronym>
            <Agency>NIH HHS</Agency>
            <Country>United States</Country>
          </Grant>
          <Grant>
            <GrantID>S10 OD018040</GrantID>
            <Acronym>OD</Acronym>
            <Agency>NIH HHS</Agency>
            <Country>United States</Country>
          </Grant>
          <Grant>
            <GrantID>K08 DK110335</GrantID>
            <Acronym>DK</Acronym>
            <Agency>NIDDK NIH HHS</Agency>
            <Country>United States</Country>
          </Grant>
          <Grant>
            <GrantID>R01 DK085025</GrantID>
            <Acronym>DK</Acronym>
            <Agency>NIDDK NIH HHS</Agency>
            <Country>United States</Country>
          </Grant>
        </GrantList>
        <PublicationTypeList>
          <PublicationType UI="D016428">Journal Article</PublicationType>
          <PublicationType UI="D052061">Research Support, N.I.H., Extramural</PublicationType>
          <PublicationType UI="D013486">Research Support, U.S. Gov't, Non-P.H.S.</PublicationType>
          <PublicationType UI="D013485">Research Support, Non-U.S. Gov't</PublicationType>
        </PublicationTypeList>
      </Article>
      <MedlineJournalInfo>
        <Country>United States</Country>
        <MedlineTA>Science</MedlineTA>
        <NlmUniqueID>0404511</NlmUniqueID>
        <ISSNLinking>0036-8075</ISSNLinking>
      </MedlineJournalInfo>
      <CitationSubset>IM</CitationSubset>
      <CommentsCorrectionsList>
        <CommentsCorrections RefType="CommentIn">
          <RefSource>Science. 2019 Dec 13;366(6471):1309-1310</RefSource>
          <PMID Version="1">31831655</PMID>
        </CommentsCorrections>
      </CommentsCorrectionsList>
    </MedlineCitation>
    <PubmedData>
      <History>
        <PubMedPubDate PubStatus="received">
          <Year>2018</Year>
          <Month>08</Month>
          <Day>16</Day>
        </PubMedPubDate>
        <PubMedPubDate PubStatus="revised">
          <Year>2019</Year>
          <Month>08</Month>
          <Day>14</Day>
        </PubMedPubDate>
        <PubMedPubDate PubStatus="accepted">
          <Year>2019</Year>
          <Month>10</Month>
          <Day>23</Day>
        </PubMedPubDate>
        <PubMedPubDate PubStatus="entrez">
          <Year>2019</Year>
          <Month>12</Month>
          <Day>14</Day>
          <Hour>6</Hour>
          <Minute>0</Minute>
        </PubMedPubDate>
        <PubMedPubDate PubStatus="pubmed">
          <Year>2019</Year>
          <Month>12</Month>
          <Day>14</Day>
          <Hour>6</Hour>
          <Minute>0</Minute>
        </PubMedPubDate>
        <PubMedPubDate PubStatus="medline">
          <Year>2019</Year>
          <Month>12</Month>
          <Day>14</Day>
          <Hour>6</Hour>
          <Minute>0</Minute>
        </PubMedPubDate>
      </History>
      <PublicationStatus>ppublish</PublicationStatus>
      <ArticleIdList>
        <ArticleId IdType="pubmed">31831639</ArticleId>
        <ArticleId IdType="pii">366/6471/eaav1282</ArticleId>
        <ArticleId IdType="doi">10.1126/science.aav1282</ArticleId>
      </ArticleIdList>
    </PubmedData>
  </PubmedArticle>
</PubmedArticleSet>`;

// console.log(getMetadata(xml));

function isElement(node) {
  return node.type() === 'element';
}

function processDate(dateElement) {
  const day = dateElement.get('Day').text();
  const month = dateElement.get('Month').text();
  const year = dateElement.get('Year').text();
  return `${day}.${month}.${year}`;
}

function processMesh(xmlElement) {
  // console.log('processMesh');
  // const mesh = _.get(articleJson, 'PubmedArticleSet.PubmedArticle.MedlineCitation.MeshHeadingList.MeshHeading', []).map((mesh) => {
  //   return _.get(mesh, 'DescriptorName.$t');
  // });
  return xmlElement.get('DescriptorName').text();
}

function processAuthor(authorXmlElement) {
  const initials = authorXmlElement.get('Initials').text();
  const lastName = authorXmlElement.get('LastName').text() ;
  return `${initials} ${lastName}`;
}

function sanitize(text) {
  return striptags(text.replace(/\s+/g,' ')).trim();
}


function getMetadata(xml, href) {

  const foobar = {
    childNodes: () => []
  };

  const xmlDoc = libxmljs.parseXmlString(xml);

  const abstract = sanitize(xmlDoc.get('//AbstractText').toString());
  const doi = xmlDoc.get('//ELocationID[@EIdType="doi"]').text();
  const dateRevised = xmlDoc.get('//DateRevised');
  const dateCompleted = xmlDoc.get('//DateCompleted');
  const mesh = (xmlDoc.get('//MeshHeadingList') || foobar)
    .childNodes()
    .filter(isElement)
    .map(processMesh);

  const authors = (xmlDoc.get('//AuthorList') || foobar)
    .childNodes()
    .filter(isElement)
    .map(processAuthor);
  const name = sanitize(xmlDoc.get('//ArticleTitle').toString());

  return {
    date: processDate(dateRevised || dateCompleted),
    href,
    doi,
    authors,
    mesh,
    name,
    abstract
  }
}

module.exports = {
  getMetadata
};
