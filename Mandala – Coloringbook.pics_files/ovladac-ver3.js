ColoringBookHandler = {
    currentFill: "fill:#ffff8f",
    swatches: null,
    selection1: null,
    coloringSteps: [],

    init: function () {
        var palette = $("#paleta64");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });
        ColoringBookHandler.selection1 = $("#selection", palette);

 
        palette = $("#customcolor1");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });
             
        palette = $("#customcolor2");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#customcolor3");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#customcolor4");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color01");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color02");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color03");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color04");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color05");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color06");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color07");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color08");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color09");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color10");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color11");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color12");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color13");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color14");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color15");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color16");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color17");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color18");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color19");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color20");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color21");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color22");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color23");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color24");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color25");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color26");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color27");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color28");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color29");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color30");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color31");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color32");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color33");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color34");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color35");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color36");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color37");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color38");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color39");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color40");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color41");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color42");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color43");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color44");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color45");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color46");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color47");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color48");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color49");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color50");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color51");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color52");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color53");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color54");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color55");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color56");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color57");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color58");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color59");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color60");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color61");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color62");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color63");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });

        palette = $("#color64");
        palette.click(function (event) {
            ColoringBookHandler.handlePaletteClick(event);
        });
   
        $("#platno").click(function (event) {
            ColoringBookHandler.handlePictureClick(event);
        });
      
       
       

        $("#tlacidlo-krok-spat").click(ColoringBookHandler.handleStepBackClick);
        $("#tlacidlo-reset-omalovanky").click(ColoringBookHandler.handlePictureResetClick);
        
    },

   
    handlePictureClick: function (event) {
        var coloringStep = {
            target: event.target,
            previousFill: $(event.target).attr('style')
        };

        $(event.target).attr('style', ColoringBookHandler.currentFill);
        ColoringBookHandler.coloringSteps.push(coloringStep);
    },
 

    handlePaletteClick: function (event) {
        var swatch = $(event.target);
        var loc = [parseInt(swatch.attr('x'), 10), parseInt(swatch.attr('y'), 10)];
        
        
         if (isNaN(loc[0]) || isNaN(loc[1])) {
             return;
        }
       
        
        
        ColoringBookHandler.selection1.attr('x', loc[0]);
        ColoringBookHandler.selection1.attr('y', loc[1]);
        
        ColoringBookHandler.currentFill = swatch.attr('style');
    },

    handleStepBackClick: function () {
        var lastColoringStep = ColoringBookHandler.getLastColoringStep();
        if (lastColoringStep != null) {
            var lastStep = ColoringBookHandler.coloringSteps.pop();
            $(lastStep.target).attr('style', lastStep.previousFill);
        }
    },

 

    handlePictureResetClick: function () {
        var coloringStepsLength = ColoringBookHandler.coloringSteps.length;
        if (coloringStepsLength > 0) {
            for (var i = coloringStepsLength - 1; i >= 0; i--) {
                $(ColoringBookHandler.coloringSteps[i].target).attr('style', ColoringBookHandler.coloringSteps[i].previousFill);
            }
        }
    },

    getLastColoringStep: function () {
        var coloringStepsLength = ColoringBookHandler.coloringSteps.length;
        if (coloringStepsLength > 0) {
            return ColoringBookHandler.coloringSteps[coloringStepsLength - 1];
        }

        return null;
    }, 
    getNextColoringStep: function () {
        var coloringStepsLength = ColoringBookHandler.coloringSteps.length;
        if (coloringStepsLength > 0) {
            return ColoringBookHandler.coloringSteps[coloringStepsLength - -1];
        }

        return null;
    }

    
};

ColoringBookHandler.init();