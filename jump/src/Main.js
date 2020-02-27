/**
 * Created by Rychou on 2018/4/19.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/gbqq.mp3' // 引入背景音乐文件


class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(2019, 12, 24) // 你们的纪念日
        }, 1000
        )
        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 8500) // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 200)
            };
            // 延迟1s开始
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = 1 + parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p>我们已经一起走过了: <span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        return (
            <div className="App animated bounceInLeft">
                <div className="date">{date()}</div>
                <div id="autotype">
                    <h1 style={{ fontWeight: 900 }}>你好呀！袁小姐！</h1>
                    <p>把声音打开哦，这里有一首歌要送给你！music！</p>
                    <p>现在是2020年2月26日，疫情已经肆虐了好久了。还记得当初我还说这个肺炎不会很严重的，看起来好像立了天大的一个flag呢sigh……本来可能已经溜进你教室陪你听了好几节课了（？）。因为没法见你，而且情人节和你生日都没有在你身边，又想送你一点特别的礼物，但我又没有啥手艺，于是就诞生了这个网页嘻嘻。
                </p>
                    <p>严格意义上来讲这算是我第一次给异性写信，也算是第一次写情书吧，我有些不知该从何写起。那我就简单写写几件小事吧。
                </p>
                    <p>还记得我给你送圣诞礼物之前的那个中午，我一路骑，从地铁站骑到菜鸟驿站去拿包装纸。那个包装纸呀是很长很大的一筒，又和一个小纸箱包在一起，就很像一个火箭筒（？）。然后我就抱着“火箭筒”一路骑过去，一边骑车一边傻笑，结果把握不住平衡狠狠摔了一跤，不过人没事，就是鞋头开胶了。在万能b站指导下我终于包好了礼物，但还是有点瑕疵，不知道会不会被你发现啦。那天的晚上，我们一起走回你的寝室的时候，就在罗森那条街上你突然揽住我的手，我一下子就感觉好温暖好幸福。
                </p>
                    <p>还有好多这样的小事呀，让我感觉你特别美好特别可爱的小事。在迪士尼玩的时候我把玩着你的挂件，你竟然感觉到了（豌豆公主？）并且转过来朝我笑了一下。在和你去逛街的时候，我真的很累了（嗷我会锻炼的55555），头在你肩上靠了一秒钟，没想到你啥反应也没有哈哈哈。还有在那班地铁上，人挨着人，我们靠得那么近，你身上真的好香好香呀。还有最后分开的时候那个拥抱，那种感觉我一辈子都忘不了。
                </p>
                    <p>最最难忘的还是那个雨夜啊。那天我们一起推着自行车推回到西32。我慌乱地叫住你。那时候还不知道你不喜欢别人叫你全名。我说，我喜欢你，做我女朋友吧。我把手放到你肩上。你说，这么突然的嘛。我说，其实我想了很久了因为是第一次恋爱没经验。你说你也是第一次。你说，好呀。你朝我笑，我也朝你笑。</p>
                    <p>一开始分开的日子里，我根本想不到没法见面是一件这么痛苦的事，不过还好我有一个能回忆的大脑，可以随时调出这些记忆，来些许缓解我的思念。和你在一起的时间，每天都好甜蜜好幸福，因为你就是我想要用一生去守护的女孩呀。</p>
                    <p>现在已经是2020年2月27日了。你在177公里外的的被子里，刚和我说了晚安。我好想你。</p>
                    <div style={{ textAlign: 'right' }}>
                        <p>爱你的♥周宇翔</p>
                        <p>2020年2月27日</p>
                    </div>
                </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}
export default Main