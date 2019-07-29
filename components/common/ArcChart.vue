<template lang="pug">
  svg.block-info.pie-chart(ref='svgPie')
</template>

<script>
import * as d3 from 'd3';

export default {
  //props: {
    //arcs: {
      //default: 'temperature',
      //type: String,
    //}
  //},
  data() {
    return {
      percent: 10,
      data: [
        {
          name: 'Proteins',
          value: 20,
        },
        {
          name: 'Fats',
          value: 10,
        },
        {
          name: 'Calories',
          value: 70,
        },
      ],
    }
  },
  methods: {
    async initPieChart() {
      let that = this,
          width = document.documentElement.clientWidth,
          height = document.documentElement.clientHeight,
          margin = 10,
          minValue = Math.min(width, height) / 2,
          radius = (minValue / 2) - margin * 2,
          range = d3.scaleLinear().domain([0, 100]).range([0, 100]),
          svg = d3.select(this.$refs.svgPie)
            .attr('style', `width: ${minValue}px; height: ${minValue}px`)
            .append('g')
            .attr('transform', `translate(${minValue / 2}, ${minValue / 2})`);

      let pie = d3.pie()
            .sort(null)
            .value(d => d.value);

      let color = d3.scaleOrdinal()
            .domain(this.data.map(d => d.name))
            .range(d3.quantize(t => d3.interpolateSpectral(t * .3), this.data.length).reverse())

      let arc = d3.arc()
            .outerRadius(radius)
            .innerRadius(radius * .6)
            .padAngle(0.03)
            .cornerRadius(radius * .1);

      const arcs = pie(this.data);


      //let cl = d3.color('rgb(228, 86, 73)');
      //cl.opacity = .8;
      //console.log(cl);

      svg.append('g')
         .attr('stroke', 'none')
         .selectAll('path')
         .data(arcs)
         .join('path')
         .attr('fill', d => {
           let opacityColor = d3.color(color(d.data.name));
           opacityColor.opacity = .3;
 
           return opacityColor;
         })
           .attr('d', arc);
         //.append("title")
           //.text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

      //svg.node();

      //let group = svg.append('g')
        ////.attr( 'style', 'transform: rotate(150deg)');

      //let arc = d3.arc()
        //.outerRadius(radius)
        //.innerRadius(radius * .7)
        //.startAngle(0)
        //.cornerRadius(radius * .1);

      //let path = group.append('path')
        ////.attr('class', 'transform: rotate(150deg)');
        ////.datum({endAngle: 1})
        //.attr('d', arc( { endAngle: (100 / 100) * (2 * Math.PI) } ) );

      //let oldValue = 0;


      //group.append('path')
        //.attr('d', arc({endAngle: Math.PI*2}))
        //.attr('style', 'fill: rgba(0,0,0,.5)');


      //let titleText = svg.append('text')
        //.attr('text-anchor', 'middle')
        //.attr('dy', -20)
        //.attr('dx', 0);

      //let textValue = 'memory';

      //let text = svg.append('text')
        //.datum(textValue)
        //.text(d => d+'%')
        //.attr('class', 'middleText')
        //.attr('text-anchor', 'middle')
        //.attr('dy', 20)
        //.attr('dx', '0');

      //if (this.option === 'memory') {
        //path.attr('style', 'fill: var(--color-active)');

        //titleText.text('Memory:')
          //.attr('style', 'fill: var(--color-active); font-size: 1rem');

        //text.attr('style', 'fill: var(--color-active); font-size: 2rem');
      //} else {
        //path.attr('style', 'fill: var(--color-second)');

        //titleText.text('Temperature:')
          //.attr('style', 'fill: var(--color-second); font-size: 1rem');

        //text.attr('style', 'fill: var(--color-second); font-size: 2rem');
      //}

      //let animation = (transition, percent, oldValue) => {
        //transition.attrTween('d', (d) => {
          //let textValue = (that.option === 'memory') ? that.data.usedMemory : that.percent;

          //let newAngle = (range(that.percent) / 100) * (2 * Math.PI),
              //interpolate = d3.interpolate(d.endAngle, newAngle),
              //interpolateCount = d3.interpolate(oldValue, textValue);

          //return (t) => {
            //d.endAngle = interpolate(t);

            //let pathForegroundCircle = arc(d);

            //if (this.option === 'memory') {
              //text.text(`${Math.floor(interpolateCount(t))} Мб`);
            //} else {
              //text.text(`+${Math.floor(interpolateCount(t))}C°`);
            //}

            //return pathForegroundCircle;
          //}
        //});
      //};

      //let animate = async function() {
          //path.transition()
            //.duration(800)
            //.ease(d3.easeLinear)
            //.call(animation, that.percent, oldValue);

          //oldValue = (that.option === 'memory') ? that.data.usedMemory : that.percent;
          //await that.getData();

          //setTimeout(await animate, 1200);
      //};
 
      //await animate();
    },
  },
  async mounted() {
    this.initPieChart();
  },
}
</script>

<style lang="stylus">
</style>
