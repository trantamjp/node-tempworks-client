import { restClient } from '../mockApiFetch';
import { createNockScopes } from '../utils';

jest.setTimeout(1 * 60 * 1000); // 1 mins in seconds

describe('RestClient', () => {
  test('RestClient GET /Search/Jobs', async () => {
    const mockResponse = {
      request: {
        method: 'GET',
        origin: 'https://api.ontempworks.com',
        pathname: '/Search/Jobs',
        query: '?skip=0&take=2&sortBy=4&countryCode=0',
        body: '',
      },
      response: {
        status: 200,
        body: '{"data":[{"orderId":5997,"municipality":"Durham","region":"NC","postalCode":"27712","dateOrderTaken":"2024-04-07T22:00:00","jobTitle":"Production/warehouse Associate","jobDescription":"Coast Personnel is hiring Production/Warehouse team members on the spot. Join our growing team, and don\'t miss out on this great opportunity! Aisin is hiring both shifts. All training is provided, no prior experience is required. 40+ hours/wk, Holiday Pay, Vacation Pay, 401K, Insurance.  $2000 SIGN-ON BONUS!If you would like more information, please feel free to contact us via the number provided below or come in to apply. Call today (984) 569-8205 to schedule your interview!!Central Professional ParkCoast Personnel Services2609 N. Duke Street, Suite 505Durham, NC 27704","category":"None","orderType":"Temp","skills":[""],"distance":0,"jobBoardUrl":"https://jobboard.ontempworks.com/Coast/jobs/details/5997"},{"orderId":5954,"municipality":"Carrollton","region":"TX","postalCode":"75006","dateOrderTaken":"2024-04-03T22:00:00","jobTitle":"Stockroom Clerks","jobDescription":"Job Purpose:Performs the physical or administrative tasks involved in the shipping, receiving, storing and distributing of materials, parts, supplies and equipment for NPI.Electronics manufacturing company in Carrollton is looking for a clerk for the stockroom.  COMPUTER SKILLS A MUST.6am to 230pm. 16.00 hr.please email dtinney@coastjobs.com with resume.  Nature of Duties:Sorts materials for specific job requirements.Sorts materials from completed jobs and returns to stock locations.Supplies material for all jobs as assigned.Accurately reads and interprets specifications.Examines materials for defects and damage occurring in transit.Obtains cycle counts.Collaborate with buyers and purchasers.Informs management regarding non-conforming materials, products and shortages.Records data on manual or computerized systems.Inspects purchased parts, assemblies, accessories, and other materials for dimensional accuracy, fit, alignment and functional operation.Inspects and measures items for conformance according to drawings, product data sheets, industry standards, and other specifications using precision measuring instruments and devices.Approves or rejects items, and accurately records inspection and disposition information.May inspect outgoing and production line parts and materials.Periodically checks for unsafe conditions and corrects as needed.Practices proper lifting techniques and safe working habits.Additional duties as assigned. Education and Experience:High School diploma or equivalent required0-1 year related experienceMust be able to climb ladder stairsMust be able to lift up to 30 lbsMust be able to follow specific directions and work independentlyExcellent communication skills (both verbal and written)Proficient computer and data entry skillsHas willingness to learn, takes initiative, and offers improvement ideasAble to work effectively in a team environmentExcellent punctuality, good attendance, and reliability requiredAdherence to health and safety regulationsAble to work overtime and weekends as needed Physical DemandsWork is performed in a warehouse environment with moving PITs. Required to stand, walk, sit and use stair ladders; talk and hear in person; use hands to finger, handle or feel objects or controls; reach with hands and arms. Regularly required to stoop, kneel, bend, and crouch. May need to exert up to 50 pounds of force to lift, carry, push and pull or otherwise move objects.  Specific vision abilities required by this job include close vision, distance vision, depth perception, color vision and the ability to adjust focus.#cl","category":"Manufacturing","orderType":"Temp To Full-Time","skills":[""],"distance":0,"jobBoardUrl":"https://jobboard.ontempworks.com/Coast/jobs/details/5954"}],"totalCount":101}',
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'x-response-from': '/Common/WebDMZ-API-API3 10.50.46.212 80',
        },
      },
    };

    const scopes = createNockScopes([mockResponse]);

    const { error, response, data } = await restClient.GET('/Search/Jobs', {
      params: {
        query: {
          skip: 0,
          take: 2,
          sortBy: 4,
          countryCode: 0,
        },
      },
    });

    scopes.forEach((s) => s.done());

    expect(error).toBeUndefined();
    expect(response).toBeInstanceOf(Response);
    expect(data).toEqual(JSON.parse(mockResponse.response.body));
  });
});
