import './App.css';
import './dist/css/main.css';
import './dist/css/i2.css';
import Cl from './content/cdnLinks';
import C from './content/cell-c';
import Q from './content/cell-Q';
import CP from './content/columnPosition';
import W from './content/cell-w';
import WP from './content/widthPosition';
import H from './content/cell-h';
import P from './content/cell-p';
import M from './content/cell-m';
import D from './content/cell-d';
import G from './content/cell-G';
import T from './content/cell-t';
import Ts from './content/cell-ts';
import Bs from './content/cell-bs';
import F from './content/cell-f';
import B from './content/cell-b';
import R from './content/cell-r';
import Bg from './content/cell-bg';
import O from './content/cell-o';
import Ta from './content/cell-ta';
import Dw from './content/cell-dw';
import A from './content/cell-a';
import SlNormal from './content/SlNormal';
import SlAbsolute from './content/SlAbsolute';
import SlResponsive from './content/SlResponsive';
import SlNest from './content/SlNest';
import Tb from './content/cell-tb';
import Sm from './content/cell-sm';
import Ap from './content/cell-ap';
import Pa from './content/cell-pa';
import Po from './content/cell-po';
import Input from './content/input';
import IconInput from './content/iconInput';
import Select from './content/select';
import IconSelect from './content/iconSelect';
import TextBox from './content/textBox';
import CheckBox from './content/checkBox';
import RadioBox from './content/radioBox';
import Mo from './content/cell-mo';
import Fl from './content/cell-fl';
import Gr from './content/cell-gr';
import Pc from './content/cell-pc';
import An from './content/cell-an';
import Ss from './content/cell-ss';
import Wz from './content/cell-wz';
import Bu from './content/cell-bu';
import Tg from './content/cell-tg';
import Pi from './content/cell-pi';
import Pb from './content/cell-pb';
import Rm from './content/cell-rm';
import Cm from './content/cell-cm';
import Nv from './content/cell-nv';
import logo from './dist/Img/logo-blue.png';
function App() {
  return (
    <div cell-pa='[-pa0:-cn]' class="page-sec">
      <header cell-bg='[-c2]'>
        <div cell-Q='[-cw]' class="">
            <div cell-nv='[-nv1:-st-fx-h100]' class="">
                <div cell-nv='[-na]' class="">
                    <div cell-nv='[-lg]' cell-bg='[-c2]' cell-h='[-h100]' class="">
                        <p cell-f='[-s35-c5-w9]'>
                             <img src={logo} />
                        </p>
                        <button cell-d='[-dn-ln-tb-mb-sb]' class=" "><i class="fa fa-bars"></i></button>
                    </div>
                    <div cell-nv='[-li]' cell-bg='[-c2]' cell-h='[-ha]' class="">
                        <p cell-p='[-l7]'><a href="#" cell-f='[-f1-s15-w5-c5-dn]'>link-1</a></p>
                        <p cell-p='[-l7]'><a href="#" cell-f='[-f1-s15-w5-c5-dn]'>link-2</a></p>
                        <p cell-p='[-l7]'><a href="#" cell-f='[-f1-s15-w5-c5-dn]'>link-3</a></p>
                        <p cell-p='[-l7]'><a href="#" cell-f='[-f1-s15-w5-c5-dn]'>link-4</a></p>
                        <div cell-dw='[-dw99:-cn-a2]' class=" ">
                            <div cell-dw='[-da]' class="">
                                <div cell-f='[-f1-s15-w5-c5]' cell-dw='[-l]' cell-w='[-wa]' cell-p='[-p2]' class="">
                                    <p cell-p='[-l7]'><a href="#" cell-f='[-f1-s15-w5-c5-dn]'>link-5</a></p>
                                </div>
                                <div cell-dw='[-c]' cell-bg='[-c1]' cell-p='[-p7]' class="">
                                    Content
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>
      <div cell-c='[-c20]' class="cell-c">
        <div cell-sl='[-aa1:-da5(0)-la7(0)-ta9(0)-ma11(0)-sa20(0)-df1(1)-lf1(1)-tf1(1)-mf1(1)-sf1(1)]' class="as-slide">
          <div cell-Q='[-q-sa] cell-p=[-p2]' class="">
            <button cell-f='[-s15-c4-w9-f1]' class="btn as-left-open">Menu</button>
            <button cell-f='[-s15-c4-w9-f1]' class="btn as-right-open">List</button>
          </div>
          <div cell-Q='[-q]' class="">
            <div cell-sl='[-lo]' cell-bg='[-c4]' class=" ">
              <div cell-t='[-r]' class="">
                <button class="btn as-left-close">X</button>
              </div>
              <div class="menu">
              <div cell-pa='[-ec0(1)]' class="list">
                  <p><a href="#">CDN Links</a></p>
                </div>
                <div cell-pa='[-ec0(2)]' class="list">
                  <p><a href="#">cell-c</a></p>
                </div>
                <div cell-pa='[-ec0(3)]' class="list">
                  <p><a href="#">cell-Q</a></p>
                </div>
                <div cell-pa='[-ec0(4)]' class="list">
                  <p><a href="#">cell-Q Column Positions</a></p>
                </div>
                <div cell-pa='[-ec0(5)]' class="list">
                  <p><a href="#">cell-w</a></p>
                </div>
                <div cell-pa='[-ec0(6)]' class="list">
                  <p><a href="#">cell-Q width Positions</a></p>
                </div>
                <div cell-pa='[-ec0(7)]' class="list">
                  <p><a href="#">cell-h</a></p>
                </div>
                <div cell-pa='[-ec0(8)]' class="list">
                  <p><a href="#">cell-p</a></p>
                </div>
                <div cell-pa='[-ec0(9)]' class="list">
                  <p><a href="#">cell-m</a></p>
                </div>
                <div cell-pa='[-ec0(10)]' class="list">
                  <p><a href="#">cell-d</a></p>
                </div>
                <div cell-pa='[-ec0(11)]' class="list">
                  <p><a href="#">cell-G</a></p>
                </div>
                <div cell-pa='[-ec0(12)]' class="list">
                  <p><a href="#">cell-t</a></p>
                </div>
                <div cell-pa='[-ec0(13)]' class="list">
                  <p><a href="#">cell-ts</a></p>
                </div>
                <div cell-pa='[-ec0(14)]' class="list">
                  <p><a href="#">cell-bs</a></p>
                </div>
                <div cell-pa='[-ec0(15)]' class="list">
                  <p><a href="#">cell-f</a></p>
                </div>
                <div cell-pa='[-ec0(16)]' class="list">
                  <p><a href="#">cell-b</a></p>
                </div>
                <div cell-pa='[-ec0(17)]' class="list">
                  <p><a href="#">cell-r</a></p>
                </div>
                <div cell-pa='[-ec0(18)]' class="list">
                  <p><a href="#">cell-bg</a></p>
                </div>
                <div cell-pa='[-ec0(19)]' class="list">
                  <p><a href="#">cell-o</a></p>
                </div>
                <div cell-pa='[-ec0(20)]' class="list">
                  <p><a href="#">cell-ta</a></p>
                </div>
                <div cell-pa='[-ec0(21)]' class="list">
                  <p><a href="#">cell-dw</a></p>
                </div>
                <div cell-pa='[-ec0(22)]' class="list">
                  <p><a href="#">cell-a</a></p>
                </div>
                <div cell-pa='[-ec0(23)]' class="list">
                  <p><a href="#">cell-sl(ns)</a></p>
                </div>
                <div cell-pa='[-ec0(24)]' class="list">
                  <p><a href="#">cell-sl(as)</a></p>
                </div>
                <div cell-pa='[-ec0(25)]' class="list">
                  <p><a href="#">cell-sl(rs)</a></p>
                </div>
                <div cell-pa='[-ec0(26)]' class="list">
                  <p><a href="#">cell-sl(nest)</a></p>
                </div>
                <div cell-pa='[-ec0(27)]' class="list">
                  <p><a href="#">cell-tb</a></p>
                </div>
                <div cell-pa='[-ec0(28)]' class="list">
                  <p><a href="#">cell-sm</a></p>
                </div>
                <div cell-pa='[-ec0(29)]' class="list">
                  <p><a href="#">cell-ap</a></p>
                </div>
                <div cell-pa='[-ec0(30)]' class="list">
                  <p><a href="#">cell-pa</a></p>
                </div>
                <div cell-pa='[-ec0(31)]' class="list">
                  <p><a href="#">cell-po</a></p>
                </div>
                <div cell-pa='[-ec0(32)]' class="list">
                  <p><a href="#">cell-in(input)</a></p>
                </div>
                <div cell-pa='[-ec0(33)]' class="list">
                  <p><a href="#">cell-in(Icon Input)</a></p>
                </div>
                <div cell-pa='[-ec0(34)]' class="list">
                  <p><a href="#">cell-in(Select Box)</a></p>
                </div>
                <div cell-pa='[-ec0(35)]' class="list">
                  <p><a href="#">cell-in(Icon Select Box)</a></p>
                </div>
                <div cell-pa='[-ec0(36)]' class="list">
                  <p><a href="#">cell-in(Text Area)</a></p>
                </div>
                <div cell-pa='[-ec0(37)]' class="list">
                  <p><a href="#">cell-in(Check Box)</a></p>
                </div>
                <div cell-pa='[-ec0(38)]' class="list">
                  <p><a href="#">cell-in(Radio)</a></p>
                </div>
                <div cell-pa='[-ec0(39)]' class="list">
                  <p><a href="#">cell-mo</a></p>
                </div>
                <div cell-pa='[-ec0(40)]' class="list">
                  <p><a href="#">cell-fl</a></p>
                </div>
                <div cell-pa='[-ec0(41)]' class="list">
                  <p><a href="#">cell-gr</a></p>
                </div>
                <div cell-pa='[-ec0(42)]' class="list">
                  <p><a href="#">cell-pc</a></p>
                </div>
                <div cell-pa='[-ec0(43)]' class="list">
                  <p><a href="#">cell-an</a></p>
                </div>
                <div cell-pa='[-ec0(44)]' class="list">
                  <p><a href="#">cell-ss</a></p>
                </div>
                <div cell-pa='[-ec0(45)]' class="list">
                  <p><a href="#">cell-wz</a></p>
                </div>
                <div cell-pa='[-ec0(46)]' class="list">
                  <p><a href="#">cell-bu</a></p>
                </div>
                <div cell-pa='[-ec0(47)]' class="list">
                  <p><a href="#">cell-tg</a></p>
                </div>
                <div cell-pa='[-ec0(48)]' class="list">
                  <p><a href="#">cell-Pi</a></p>
                </div>
                <div cell-pa='[-ec0(49)]' class="list">
                  <p><a href="#">cell-Pb</a></p>
                </div>
                <div cell-pa='[-ec0(50)]' class="list">
                  <p><a href="#">cell-Rm</a></p>
                </div>
                <div cell-pa='[-ec0(51)]' class="list">
                  <p><a href="#">cell-Cm</a></p>
                </div>
                <div cell-pa='[-ec0(52)]' class="list">
                  <p><a href="#">cell-Nv</a></p>
                </div>
              </div>
            </div>
            <div cell-sl='[-m]' cell-bg='[-c2]' cell-c='[-c20]' cell-p='[-p25]' class="column">
              <div cell-pa='[-ea0(1)]' cell-c='[-c20]' class="content-sec">
                <Cl></Cl>
              </div>
              <div cell-pa='[-ea0(2)]' cell-c='[-c20]' class="content-sec">
                <C></C>
              </div>
              <div cell-pa='[-ea0(3)]' cell-c='[-c20]' class="content-sec">
                <Q></Q>
              </div>
              <div cell-pa='[-ea0(4)]' cell-c='[-c20]' class="content-sec">
                <CP></CP>
              </div>
              <div cell-pa='[-ea0(5)]' cell-c='[-c20]' class="content-sec">
                <W></W>
              </div>
              <div cell-pa='[-ea0(6)]' cell-c='[-c20]' class="content-sec">
                <WP></WP>
              </div>
              <div cell-pa='[-ea0(7)]' cell-c='[-c20]' class="content-sec">
                <H></H>
              </div>
              <div cell-pa='[-ea0(8)]' cell-c='[-c20]' class="content-sec">
                <P></P>
              </div>
              <div cell-pa='[-ea0(9)]' cell-c='[-c20]' class="content-sec">
                <M></M>
              </div>
              <div cell-pa='[-ea0(10)]' cell-c='[-c20]' class="content-sec">
                <D></D>
              </div>
              <div cell-pa='[-ea0(11)]' cell-c='[-c20]' class="content-sec">
                <G></G>
              </div>
              <div cell-pa='[-ea0(12)]' cell-c='[-c20]' class="content-sec">
                <T></T>
              </div>
              <div cell-pa='[-ea0(13)]' cell-c='[-c20]' class="content-sec">
                <Ts></Ts>
              </div>
              <div cell-pa='[-ea0(14)]' cell-c='[-c20]' class="content-sec">
                <Bs></Bs>
              </div>
              <div cell-pa='[-ea0(15)]' cell-c='[-c20]' class="content-sec">
                <F></F>
              </div>
              <div cell-pa='[-ea0(16)]' cell-c='[-c20]' class="content-sec">
                <B></B>
              </div>
              <div cell-pa='[-ea0(17)]' cell-c='[-c20]' class="content-sec">
                <R></R>
              </div>
              <div cell-pa='[-ea0(18)]' cell-c='[-c20]' class="content-sec">
                <Bg></Bg>
              </div>
              <div cell-pa='[-ea0(19)]' cell-c='[-c20]' class="content-sec">
                <O></O>
              </div>
              <div cell-pa='[-ea0(20)]' cell-c='[-c20]' class="content-sec">
                <Ta></Ta>
              </div>
              <div cell-pa='[-ea0(21)]' cell-c='[-c20]' class="content-sec">
                <Dw></Dw>
              </div>
              <div cell-pa='[-ea0(22)]' cell-c='[-c20]' class="content-sec">
                <A></A>
              </div>
              <div cell-pa='[-ea0(23)]' cell-c='[-c20]' class="content-sec">
                <SlNormal></SlNormal>
              </div>
              <div cell-pa='[-ea0(24)]' cell-c='[-c20]' class="content-sec">
                <SlAbsolute></SlAbsolute>
              </div>
              <div cell-pa='[-ea0(25)]' cell-c='[-c20]' class="content-sec">
                <SlResponsive></SlResponsive>
              </div>
              <div cell-pa='[-ea0(26)]' cell-c='[-c20]' class="content-sec">
                <SlNest></SlNest>
              </div>
              <div cell-pa='[-ea0(27)]' cell-c='[-c20]' class="content-sec">
                <Tb></Tb>
              </div>
              <div cell-pa='[-ea0(28)]' cell-c='[-c20]' class="content-sec">
                <Sm></Sm>
              </div>
              <div cell-pa='[-ea0(29)]' cell-c='[-c20]' class="content-sec">
                <Ap></Ap>
              </div>
              <div cell-pa='[-ea0(30)]' cell-c='[-c20]' class="content-sec">
                <Pa></Pa>
              </div>
              <div cell-pa='[-ea0(31)]' cell-c='[-c20]' class="content-sec">
                <Po></Po>
              </div>
              <div cell-pa='[-ea0(32)]' cell-c='[-c20]' class="content-sec">
                <Input></Input>
              </div>
              <div cell-pa='[-ea0(33)]' cell-c='[-c20]' class="content-sec">
                <IconInput></IconInput>
              </div>
              <div cell-pa='[-ea0(34)]' cell-c='[-c20]' class="content-sec">
                <Select></Select>
              </div>
              <div cell-pa='[-ea0(35)]' cell-c='[-c20]' class="content-sec">
                <IconSelect></IconSelect>
              </div>
              <div cell-pa='[-ea0(36)]' cell-c='[-c20]' class="content-sec">
                <TextBox></TextBox>
              </div>
              <div cell-pa='[-ea0(37)]' cell-c='[-c20]' class="content-sec">
                <CheckBox></CheckBox>
              </div>
              <div cell-pa='[-ea0(38)]' cell-c='[-c20]' class="content-sec">
                <RadioBox></RadioBox>
              </div>
              <div cell-pa='[-ea0(39)]' cell-c='[-c20]' class="content-sec">
                <Mo></Mo>
              </div>
              <div cell-pa='[-ea0(40)]' cell-c='[-c20]' class="content-sec">
                <Fl></Fl>
              </div>
              <div cell-pa='[-ea0(41)]' cell-c='[-c20]' class="content-sec">
                <Gr></Gr>
              </div>
              <div cell-pa='[-ea0(42)]' cell-c='[-c20]' class="content-sec">
                <Pc></Pc>
              </div>
              <div cell-pa='[-ea0(43)]' cell-c='[-c20]' class="content-sec">
                <An></An>
              </div>
              <div cell-pa='[-ea0(44)]' cell-c='[-c20]' class="content-sec">
                <Ss></Ss>
              </div>
              <div cell-pa='[-ea0(45)]' cell-c='[-c20]' class="content-sec">
                <Wz></Wz>
              </div>
              <div cell-pa='[-ea0(46)]' cell-c='[-c20]' class="content-sec">
                <Bu></Bu>
              </div>
              <div cell-pa='[-ea0(47)]' cell-c='[-c20]' class="content-sec">
                <Tg></Tg>
              </div>
              <div cell-pa='[-ea0(48)]' cell-c='[-c20]' class="content-sec">
                <Pi></Pi>
              </div>
              <div cell-pa='[-ea0(49)]' cell-c='[-c20]' class="content-sec">
                <Pb></Pb>
              </div>
              <div cell-pa='[-ea0(50)]' cell-c='[-c20]' class="content-sec">
                <Rm></Rm>
              </div>
              <div cell-pa='[-ea0(51)]' cell-c='[-c20]' class="content-sec">
                <Cm></Cm>
              </div>
              <div cell-pa='[-ea0(52)]' cell-c='[-c20]' class="content-sec">
                <Nv></Nv>
              </div>
            </div>
            <div cell-sl='[-ro]' cell-bg='[-c1]' class="column">
              <div cell-t='[-l]' class="">
                <button class="btn as-right-close">X</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
