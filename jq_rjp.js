(function($){
    $.fn.jqRjp = function(){
        var $this = this;

        /******************** 这部分有修改  ***************************/
        var str = "<div class=\"keyboard\">\n" +
            "            <div class=\"Zimu fj\">\n" +
            "                <table>\n" +

            "                    <tr>\n" +
            "                        <td><input class=\"i_button add_sz\" type=button value=\"0\"></td>\n" +
            "                        <td><input class=\"i_button add_sz\" type=button value=\"1\"></td>\n" +
            "                        <td><input class=\"i_button add_sz\" type=button value=\"2\"></td>\n" +
            "                        <td><input class=\"i_button add_sz\" type=button value=\"3\"></td>\n" +
            "                        <td><input class=\"i_button add_sz\" type=button value=\"4\"></td>\n" +
            "                        <td><input class=\"i_button add_sz\" type=button value=\"5\"></td>\n" +
            "                        <td><input class=\"i_button add_sz\" type=button value=\"6\"></td>\n" +
            "                        <td><input class=\"i_button add_sz\" type=button value=\"7\"></td>\n" +
            "                        <td><input class=\"i_button add_sz\" type=button value=\"8\"></td>\n" +
            "                        <td><input class=\"i_button add_sz\" type=button value=\"9\"></td>\n" +
            "                        <td><input class=\"i_button add_sz\" type=button value=\"-\"></td>\n" +
            "                        <td colspan='2' class='sbiao'><input class=\"i_button i_button_btn sup_but\" type=button value=\"正常\"></td>\n" +
            "                        <td colspan='2'><input class=\"i_button i_button_btn quit\"  type=\"button\" value=\" 退出 \"></td>\n" +
            "                    </tr>\n" +

            "\n" +
            "                    <tr>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"q\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"w\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"e\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"r\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"t\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"y\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"u\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"i\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"o\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"p\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"′\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"''\"></td>\n" +
            "                        <td rowspan='2'><input class=\"i_button dxxqh\" type=button value=\"大小写\"></td>\n" +
            // "                        <td><input class=\"i_button add\" type=button value=\"{\"></td>\n" +
            "                        <td colspan='2'><input class=\"i_button i_button_btn teshuzifu\" type=button value=\" 特殊字符 \" ></td>\n" +
            "\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"μ\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"a\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"s\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"d\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"f\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"g\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"h\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"j\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"k\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"l\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"·\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"°\"></td>\n" +
            "                        <td colspan='2'><input class=\"i_button i_button_btn qingkong\" type=button value=\"清空\" ></td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"_\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"z\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"x\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"c\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"v\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"b\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"n\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"m\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"<\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\">\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"℃\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"Ω\"></td>\n" +
            "                        <td colspan=\"3\"><input class=\"i_button i_button_bs backSpace\" type=button value=\"BackSpace\"></td>\n" +
            "                    </tr>\n" +
            "                </table>\n" +
            "            </div>\n" +
            "            <div class=\"Teshuzifu fj\" style=\"display: none\">\n" +
            "                <table>\n" +
            "                    <tr>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"km\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"m\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"dm\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"cm\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"mm\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"μm\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"nm\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"n mile\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"cm²\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"mm²\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"m²\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"km²\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"hm²\"></td>\n" +
            "                        <td><input class=\"i_button i_button_btn quit\" type=\"button\" value=\" 退出 \"></td>\n" +
            "                    </tr>\n" +
            "\n" +
            "                    <tr>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"m³\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"dm³\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"cm³\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"mm³\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"L\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"mL\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"s\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"min\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"h\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"d\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"rad\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"sr\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"m/s\"></td>\n" +
            "                        <td><input class=\"i_button i_button_btn zimu\" type=button  value=\" 字母 \" ></td>\n" +
            "\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"km/h\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"kn\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"m/s²\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"rad/s\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"s^(-1)\" title='s^(-1)'></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"r/min\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"r/s\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"m⁴\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"C/kg\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"t\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"kg\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"g\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"μg\"></td>\n" +
            "                        <td><input class=\"i_button i_button_btn qingkong\" type=button  value=\"清空\" ></td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"kg/m³\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"t/m³\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"kg/L\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"g/cm³\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"kg/m\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"tex\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"kg/s\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"m³/s\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"L/s\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"N\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"N·m\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"N/m\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"N·s\"></td>\n" +
            "                        <td><input class=\"i_button i_button_btn add\" type=button value=\"N·m²/kg²\"></td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"Pa\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"kPa \"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"Mpa\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"m^(-1)\" title='m^(-1)'></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"Hz\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"dB\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"hPa\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"Pa·s·m²/s\" title='Pa·s·m²/s'></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"J\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"eV\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"Kw·h\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"J/kg\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"K\"></td>\n" +
            "                        <td><input class=\"i_button i_button_btn add\" type=button value=\"℃\"></td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"K^(-1)(℃^(-1))\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"W\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"W/m²\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"m².K/W\" title='m².K/W'></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"W/(m·k)\" title='W/(m·k)'></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"W/(m²·k)\" title='W/(m²·k)'></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"A\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"C\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"V\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"μμF\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"Ω\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"S\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"Ω·m\"></td>\n" +
            "                        <td><input class=\"i_button i_button_btn  add\" type=button value=\"S/m\"></td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"A/m²\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"A/m\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"C/m³\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"C/m²\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"H\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"Wb\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"T\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"A/m\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"cd\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"1m\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"1m·s\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"cd/m²\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"mol\"></td>\n" +
            "                        <td><input class=\"i_button i_button_btn add\" type=button value=\"kg/mol\"></td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"mol/m³\" title='mol/m³'></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"mol/L\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"Bq\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"Gy\"></td>\n" +
            "                        <td><input class=\"i_button add\" type=button value=\"Sv\"></td>\n" +
            "                        <td><input class=\"i_button\" type=button value=\"\"></td>\n" +
            "                        <td><input class=\"i_button\" type=button value=\"\"></td>\n" +
            "                        <td><input class=\"i_button\" type=button value=\"\"></td>\n" +
            "                        <td><input class=\"i_button\" type=button value=\"\"></td>\n" +
            "                        <td><input class=\"i_button\" type=button value=\"\"></td>\n" +
            "                        <td><input class=\"i_button\" type=button value=\"\"></td>\n" +
            "                        <td><input class=\"i_button\" type=button value=\"\"></td>\n" +
            "                        <td colspan=\"2\"><input class=\"i_button i_button_bs backSpace\" type=button value=\"BackSpace\"></td>\n" +
            "                    </tr>\n" +
            "                </table>\n" +
            "            </div>\n" +
            "        </div>";

        /*****************************  结束 *******************************/

        this.append(str);


        //双击点开软键盘
        $this.find(".rjp_shuru").on("dblclick",function(){      //把$（".rjp_shuru"）$this.find(".rjp_shuru")
            $(this).siblings(".keyboard").css("display","block");
        });


        //添加
        $this.delegate(".add","click",function(){   //把$(".jq_rjp") 改成 $this,  这个$this,上面有声明（新增的）

            var str = $(this).parents(".keyboard").siblings(".rjp_shuru").val()+$(this).val();
            $(this).parents(".keyboard").siblings(".rjp_shuru").val(str);

        });

        //清除input中的值
        $this.delegate(".qingkong","click",function(){   //把$(".jq_rjp") 改成 $this,  这个$this,上面有声明（新增的）
            $(this).parents(".keyboard").siblings(".rjp_shuru").val("");
        });

        //删除input中最后一位
        $this.delegate(".backSpace","click",function(){   //把$(".jq_rjp") 改成 $this,  这个$this,上面有声明（新增的）
            var len = $(this).parents(".keyboard").siblings(".rjp_shuru").val().length;
            var formerV = $(this).parents(".keyboard").siblings(".rjp_shuru").val();
            var newV = formerV.slice(0,len-1);
            $(this).parents(".keyboard").siblings(".rjp_shuru").val(newV);
        });

        //退出
        $this.delegate(".quit","click",function(){   //把$(".jq_rjp") 改成 $this,  这个$this,上面有声明（新增的）
            $(this).parents(".keyboard").css("display","none");
            // $(".jq_rjp").undelegate();
        });

        //切换板块
        $this.delegate(".teshuzifu","click",function(){    //把$(".jq_rjp") 改成 $this,  这个$this,上面有声明（新增的）
            $(this).parents(".Zimu").siblings(".Teshuzifu").show();
            $(this).parents(".Zimu").hide();
        });
        $this.delegate(".zimu","click",function(){   //把$(".jq_rjp") 改成 $this,  这个$this,上面有声明（新增的）
            $(this).parents(".Teshuzifu").siblings(".Zimu").show();
            $(this).parents(".Teshuzifu").hide();
        });

        //大小写切换
        var CSLetter = true;
        $this.delegate(".dxxqh","click",function(){    //把$(".jq_rjp") 改成 $this,  这个$this,上面有声明（新增的）


            if(CSLetter){
                CSLetter = false;
                $.each($(this).parents(".fj").find(".add"),function(i,v){
                    $(v).val($(v).val().toUpperCase());
                });
            }else{
                CSLetter = true;
                $.each($(this).parents(".fj").find(".add"),function(i,v){
                    $(v).val($(v).val().toLowerCase());
                });
            }
        });


        /**************************上标/下标***************************/
        var num= 0;
        var Sup = ["%u2070","%u00B9","%u00B2","%u00B3","%u2074","%u2075","%u2076","%u2077","%u2078","%u2079","%u207B"];
        var Sub = ["%E2%82%80","%E2%82%81","%E2%82%82","%E2%82%83","%E2%82%84","%E2%82%85","%E2%82%86","%E2%82%87","%E2%82%88","%E2%82%89","%E2%82%8B"];
        $this.delegate(".sup_but","click",function(){

            num++;
            if(num%3 == 1){
                $(this)[0].value = "上标";
            }else if(num%3 == 2){
                $(this)[0].value = "下标";
            }else{
                $(this)[0].value = "正常";
            }

        });
        $this.delegate(".add_sz","click",function(){
            if($(this).parent().siblings(".sbiao").find("input").val() == "上标"){
                var char;
                if($(this)[0].value == "-"){
                    char = unescape(Sup[10]);
                }else{
                    char = unescape(Sup[$(this)[0].value]);
                }
                var str = $(this).parents(".keyboard").siblings(".rjp_shuru").val()+char;
                $(this).parents(".keyboard").siblings(".rjp_shuru").val(str);

            }else if($(this).parent().siblings(".sbiao").find("input").val() == "下标"){
                var char;
                if($(this)[0].value == "-"){
                    char = decodeURIComponent(Sub[10]);
                }else{
                    char = decodeURIComponent(Sub[$(this)[0].value]);
                }
                var str = $(this).parents(".keyboard").siblings(".rjp_shuru").val()+char;
                $(this).parents(".keyboard").siblings(".rjp_shuru").val(str);

            }else{
                var str = $(this).parents(".keyboard").siblings(".rjp_shuru").val()+$(this).val();
                $(this).parents(".keyboard").siblings(".rjp_shuru").val(str);
            }
        });
        /************************ 结束 *************************/

        return this;
    }
})(jQuery);