<script>
import { Line } from 'vue-chartjs';

export default {
    name: 'Chart',
    extends: Line,
    props: ['chartdata'],
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
        this.renderChart(this.chartdata, this.options);
    },
};
</script>
<style lang=""></style>
