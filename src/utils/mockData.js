export const DashboardCardsData = {
    productionKPIs: [
        {
            type: 'warning',
            title: 'Submissions',
            middleText: "860",
            bottomText: "959",
            bottomPercentage: "- 10.32"
        },
        {
            type: 'success',
            title: 'Submissions-to-bind ratio',
            middleText: "52.33 %",
            bottomText: "49.43 %",
            bottomPercentage: "+ 2.90"
        },
        {
            type: 'warning',
            title: 'Premium, bound policies',
            middleText: "$919,140",
            bottomText: "1.04M",
            bottomPercentage: "- 11.36"
        },
        {
            type: 'warning',
            title: 'Avg premium, bound policies',
            middleText: "$2.04K",
            bottomText: "2.19K",
            bottomPercentage: "- 6.63"
        },
    ],
    claimsKPIs: [
        {
            type: 'success',
            title: 'Claims ratio',
            titleDescription: 'Rolling 28 days',
            middleText: "0.89 %",
            bottomText: "2.74 %",
            bottomPercentage: "- 1.85"
        },
        {
            type: 'success',
            title: 'Payout % (claims paid to bind)',
            titleDescription: 'Rolling 28 days',
            middleText: "0.00 %",
            bottomText: "0.63 %",
            bottomPercentage: "+ 100"
        },
    ]
}