import { gql } from '@apollo/client';

export const cmsData = gql`
    query dataQuery {
        allMaterials {
        id
        materialTitle
        materialDescription
        materialCategory
        materialSlug
        }
        allAnnoucements {
        id
        testName
        testDescription
        testDate
        }
    }
`