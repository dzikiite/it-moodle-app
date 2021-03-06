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
        annoucementTitle
        annoucementDescription
        annoucementDate
        }
        allTests {
            id
            testName
            testSlug
            answearTime
            questions {
                id
                questionTitle
            }
        }
    }
`