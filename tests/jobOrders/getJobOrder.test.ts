import { restClient } from '../mockApiFetch';
import { createNockScopes } from '../utils';

jest.setTimeout(1 * 60 * 1000); // 1 mins in seconds

describe('RestClient', () => {
  test('RestClient GET /JobOrders/{id}', async () => {
    const mockResponse = {
      request: {
        method: 'GET',
        origin: 'https://api.ontempworks.com',
        pathname: '/JobOrders/5997',
        query: '',
        body: '',
      },
      response: {
        status: 200,
        body: '{"localizedJobOrderDetails":[],"jobOrderId":5997,"branchId":7,"branch":"Durham","jobOrderTypeId":5,"jobOrderType":"Temp","jobTitleId":1,"jobTitle":"Default","jobDescription":null,"payRate":0.0000,"billRate":0.0000,"jobOrderStatusId":19,"jobOrderStatus":"Unfilled","isActive":true,"positionsRequired":1,"positionsFilled":0,"customerId":4410,"customerName":"Aisin","departmentName":"Primary","jobOrderDurationId":33,"jobOrderDuration":"Indef","dateOrderTaken":"2024-04-08T12:38:00","startDate":null,"supervisorContactId":null,"supervisorFirstName":null,"supervisorLastName":null,"supervisorOfficePhoneCountryCallingCode":null,"supervisorOfficePhone":null,"supervisorEmailAddress":null,"doNotAutoClose":false,"usesTimeClock":false,"usesPeopleNet":false,"notes":null,"alternateJobOrderId":null,"dressCode":null,"safetyNotes":null,"directions":null,"serviceRepId":2204,"serviceRep":"Jackeline Hernandez","salesTeamId":6,"salesTeam":"Michael Avidano","publicJobTitle":"Production/warehouse Associate","publicJobDescription":"<p style=\'margin-right:0in;margin-left:0in;font-size:16px;font-family:\\"Times New Roman\\",serif;margin:0in;background:white;\'><strong><span style=\'font-size:15px;font-family:\\"Calibri\\",sans-serif;color:#414141;\'>Coast Personnel</span></strong><span style=\'font-size:15px;font-family:\\"Calibri\\",sans-serif;color:#414141;\'>&nbsp;is hiring <strong><span style=\'font-family:\\"Calibri\\",sans-serif;\'>Production/Warehouse</span></strong> team members on the spot. Join our growing team, and don\'t miss out on this great opportunity!&nbsp;</span></p><p style=\'margin-right:0in;margin-left:0in;font-size:16px;font-family:\\"Times New Roman\\",serif;margin:0in;background:white;\'><br></p><p style=\'margin-right:0in;margin-left:0in;font-size:16px;font-family:\\"Times New Roman\\",serif;margin:0in;background:white;\'><strong><span style=\'font-size:15px;font-family:\\"Calibri\\",sans-serif;color:#414141;\'>Aisin&nbsp;is hiring both shifts. All training is provided, no prior experience is required</span></strong><span style=\'font-size:15px;font-family:\\"Calibri\\",sans-serif;color:#414141;\'>. <strong><span style=\'font-family:\\"Calibri\\",sans-serif;\'>40+ hours/wk, Holiday Pay, Vacation Pay, 401K, Insurance. &nbsp;$2000 SIGN-ON BONUS!</span></strong></span></p><p style=\'margin-right:0in;margin-left:0in;font-size:16px;font-family:\\"Times New Roman\\",serif;margin:0in;background:white;\'><br></p><p style=\'margin-right:0in;margin-left:0in;font-size:16px;font-family:\\"Times New Roman\\",serif;margin:0in;background:white;\'><span style=\'font-size:15px;font-family:\\"Calibri\\",sans-serif;color:#414141;\'>If you would like more information, please feel free to contact us via the number provided below or come in to apply.&nbsp;</span></p><p style=\'margin-right:0in;margin-left:0in;font-size:16px;font-family:\\"Times New Roman\\",serif;margin:0in;background:white;\'><span style=\'font-size:15px;font-family:\\"Calibri\\",sans-serif;color:#414141;\'>Call today <strong><span style=\'font-family:\\"Calibri\\",sans-serif;\'>(984) 569-8205&nbsp;</span></strong>to schedule your interview!!</span></p><p style=\'margin-right:0in;margin-left:0in;font-size:16px;font-family:\\"Times New Roman\\",serif;margin:0in;background:white;\'><br></p><p style=\'margin-right:0in;margin-left:0in;font-size:16px;font-family:\\"Times New Roman\\",serif;margin:0in;background:white;\'><span style=\'font-size:15px;font-family:\\"Calibri\\",sans-serif;color:#414141;\'>Central Professional Park</span></p><p style=\'margin-right:0in;margin-left:0in;font-size:16px;font-family:\\"Times New Roman\\",serif;margin:0in;background:white;\'><span style=\'font-size:15px;font-family:\\"Calibri\\",sans-serif;color:#414141;\'>Coast Personnel Services</span></p><p style=\'margin-right:0in;margin-left:0in;font-size:16px;font-family:\\"Times New Roman\\",serif;margin:0in;background:white;\'><span style=\'font-size:12px;font-family:\\"Arial\\",sans-serif;color:#414141;\'>2609 N. Duke Street, Suite 505</span></p><p style=\'margin-right:0in;margin-left:0in;font-size:16px;font-family:\\"Times New Roman\\",serif;margin:0in;background:white;\'><span style=\'font-size:12px;font-family:\\"Arial\\",sans-serif;color:#414141;\'>Durham, NC 27704</span></p><p style=\'margin-right:0in;margin-left:0in;font-size:16px;font-family:\\"Times New Roman\\",serif;margin:0in;background:white;\'><br></p>","publicPostingDate":"2024-04-08T05:00:00+00:00","doNotPostPublicly":false,"publicJobDescriptionContentType":null,"publicEducationSummary":null,"publicExperienceSummary":"None Required","showPayRate":false,"showWorksiteAddress":false,"isDirectHireJobOrder":false,"remoteWorkStatusId":null,"remoteWorkStatus":null}',
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'x-response-from': '/Common/WebDMZ-API-API3 10.50.46.212 80',
        },
      },
    };

    const scopes = createNockScopes([mockResponse]);

    const { error, response, data } = await restClient.GET('/JobOrders/{id}', {
      params: {
        path: {
          id: 5997,
        },
      },
    });

    scopes.forEach((s) => s.done());

    expect(error).toBeUndefined();
    expect(response).toBeInstanceOf(Response);
    expect(data).toEqual(JSON.parse(mockResponse.response.body));
  });
});
