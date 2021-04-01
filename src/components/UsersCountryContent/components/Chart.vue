<script>
import { Line, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

export default {
    name: 'Chart',
    extends: Line,
    mixins: [reactiveProp],
    data() {
        return {
            options: {
                legend: {
                    display: true,
                    labels: {
                        fontSize: 14,
                    },
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            type: 'time',
                            ticks: {
                                stepSize: 5,
                            },
                            time: {
                                // unit: 'day',
                                // stepSize: 14,
                                displayFormats: {
                                    quarter: 'MMM YYYY',
                                },
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
        };
    },
    mounted() {
        this.renderChart(this.chartData, this.options);
    },
};
</script>
<style lang=""></style>
