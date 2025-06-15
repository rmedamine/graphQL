import { fetchData } from "./fetchData.js"
import { queries } from "../queries/queries.js"
import { DivsIndes, spans, Content, generetsvg } from "./utils.js";



export async function Cards() {
    let container = document.querySelector(".container")
    let rows_content = DivsIndes("rows-content")
    let rows = DivsIndes("rows")
    let next = DivsIndes("next")
    let data = await fetchData(queries)

    if (data.errors !== undefined) {
        localStorage.removeItem('jwt');
        location.reload()
    } else {
        let cards = level(data)
        let cards1 = topSkills(data)
        let cards2 = totalxp(data)
        let graph_Cards = graph_Card(data)
        next.append(graph_Cards)
        rows.append(cards, cards1, cards2)
        rows_content.append(rows, next)
        container.append(rows_content)
    }
    
    
}

function level(data) {
    let cards = null
    Object.entries(data).forEach(c => {
        cards = DivsIndes("cards")
        let level = spans("level", `${c[1].user[0].level[0].level}`)
        let level_text = spans("level-text", "Level")
        
        let content_user = Content(`Welcome, ${c[1].user[0].firstName} ${c[1].user[0].lastName}!`)
        cards.append(content_user, level_text, level)
    })
    
    return cards
}

function topSkills(data) {
    let cards = DivsIndes("cards");
    let Skills = Content("Top 3 Skills");
    let top_skills = null

    cards.append(Skills);
    Object.entries(data).forEach(([_, ele]) => {
        top_skills = ele.user[0].sklis.sort((a, b) => b.amount - a.amount).slice(0, 3);
        
    })
    
    let skillData = [
        { color: "#6160FF", width: "", text: "", },
        { color: "#3EC5E0", width: "", text: "", },
        { color: "#4D96FF", width: "", text: "", },
    ];
    skillData = skillData.map((item, index) => ({
        ...item,
        text: top_skills[index] ? top_skills[index].type : "",
        width: top_skills[index] ? top_skills[index].amount : ""
    }));
    
    skillData.forEach((skill) => {
        const svg = generetsvg("svg", {
            width: "500",
            height: "15",
            preserveAspectRatio: "xMidYMid meet", 
        });
        
        const rect = generetsvg("rect", {
            x: "10",
            y: `7`,
            width: `${skill.width}%`,
            height: "7",
            fill: skill.color,
            rx: "5",
            ry: "5"
        });

        let rank_item = DivsIndes("rank-item");
        
        let project = spans("project");
        
        project.textContent = skill.text.slice(6) + ` ${skill.width}%`;
        
        svg.append(rect);
        rank_item.append(svg, project);
        
        cards.append(rank_item);
    });
    return cards;
}

function totalxp(data) {
    let cards = DivsIndes("cards");
    let row_level = DivsIndes("row-level")
    let developer = DivsIndes("developer")
    let xp_level = DivsIndes("xp-level")
    developer.textContent = "Total XP"    
    Object.entries(data).forEach(c => {
        let xp_total = c[1].user[0].totalXp.aggregate.sum.amount
        
        if (xp_total < 1000) {
            xp_level.textContent = `${xp_total}B`
        } else if (xp_total < 100000) {
            xp_level.textContent = `${Math.round(xp_total / 1000)}KB`
        } else {
            xp_level.textContent = `${Math.round(xp_total / 100000)}MB`
        }
        
    })
    row_level.append(developer, xp_level)
    cards.append(row_level)
    return cards
}
function graph_Card(data) {
    let cumulativeXP = 0;
    let cards = DivsIndes("cards");
    Object.entries(data).forEach(([_, ele]) => {

        const sortedData = ele.user[0].xpProgre.sort((a, b) =>
            new Date(a.createdAt) - new Date(b.createdAt)
    );

    const dataPoints = sortedData.map(transaction => {
            cumulativeXP += transaction.amount;
            return {
                date: new Date(transaction.createdAt),
                name: transaction.object.name,
                xp: cumulativeXP
            };
        });
        const startDate = dataPoints[0].date;
        const endDate = dataPoints[dataPoints.length - 1].date;
        const maxXP = dataPoints[dataPoints.length - 1].xp;

        const width = 680;
        const height = 303;

        function scaleX(date) {
            const timeRange = endDate - startDate;
            const timePosition = date - startDate;
            return (timePosition / timeRange) * width;
        }

        function scaleY(xp) {
            return height - (xp / maxXP) * height;
        }
        let x = null
        let y = null
        const pathData = dataPoints.map((point, index) => {
            x = scaleX(point.date);
            y = scaleY(point.xp);
            return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
        }).join(' ');

        const emptyDiv = DivsIndes('div', 'content-box');

        const titleDiv = DivsIndes('div', 'title');
        titleDiv.textContent = "XP progression"
        emptyDiv.appendChild(titleDiv)
        const svg = generetsvg("svg", {
            width: '90%',
            height: '90%',
            viewBox: '0 -20 680 303',
            preserveAspectRatio: "xMidYMid meet",
            fill: 'none'
        });

        svg.setAttribute('style', 'overflow: visible; display: block; margin: auto;');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        path.setAttribute('stroke', '#ffff');
        path.setAttribute('fill', 'transparent');
        path.setAttribute('stroke-width', '3');

        svg.appendChild(path);

        dataPoints.forEach((point) => {

            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            const x = scaleX(point.date);
            const y = scaleY(point.xp);

            circle.setAttribute('cx', x);
            circle.setAttribute('cy', y);
            circle.setAttribute('r', '5');
            circle.setAttribute('fill', '#3EC5E0');

            circle.addEventListener('mouseover', (e) => {
                circle.setAttribute('r', '10');
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.style.position = 'absolute';
                tooltip.style.left = `${e.pageX + 10}px`;
                tooltip.style.top = `${e.pageY - 10}px`;
                tooltip.style.color = 'white';
                tooltip.style.padding = '5px';
                tooltip.style.borderRadius = '3px';
                tooltip.style.fontSize = '12px';
                tooltip.innerHTML = `
                  Name: ${point.name}<br>
                  Total XP: ${Math.round(point.xp).toLocaleString()}
                `;
                document.body.appendChild(tooltip);
                circle.addEventListener('mouseout', () => {
                    circle.setAttribute('r', '5');
                    tooltip.remove();
                });
            });
            svg.appendChild(circle);
        });


        createLabel(svg, dataPoints[0].xp, 'start', x, y);
        createLabel(svg, dataPoints[dataPoints.length - 1].xp, 'end', x, y);


        emptyDiv.append(svg);

        cards.classList.add("graph")
        cards.append(emptyDiv,)
    })

    return cards
}
function createLabel(svg, point, position, xx, yy) {
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    let x = null;
    let y = null;
    if (position === "start") {
        x = -50
        y = 300
    } else if (position === "end") {
        x = xx
        y = yy
    }

    text.setAttribute('x', x + (position === 'start' ? -15 : 10));
    text.setAttribute('y', y - 10);
    text.setAttribute('fill', 'white');
    text.setAttribute('font-size', '12');
    text.setAttribute('font-weight', 'bold');
    text.setAttribute('text-anchor', position === 'start' ? 'start' : 'end');

    text.textContent = `${Math.round(point).toLocaleString()}XP`;
    svg.appendChild(text);

}


