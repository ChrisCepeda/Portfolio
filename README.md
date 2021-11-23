#Portfolio

/* why use grid?
<!-- One of the chief uses for a grid is to keep your elements aligned and ordered, and your page design clean and neat. -->

<!-- This is because grids encourage alignment, that’s a big part of their job description actually. By establishing a grid system, you are creating a set structure for yourself to align elements against, and in doing this, you can create for yourself a neat, clean, and organized layout. -->

/* Box-sizing
<!-- It is often useful to set box-sizing to border-box to layout elements. This makes dealing with the sizes of elements much easier, and generally eliminates a number of pitfalls you can stumble on while laying out your content.  On the other hand, when using position: relative or position: absolute, use of box-sizing: content-box allows the positioning values to be relative to the content, and independent of changes to border and padding sizes, which is sometimes desirable. -->

content-box
<!-- This is the initial and default value as specified by the CSS standard. The width and height properties include the content, but does not include the padding, border, or margin. For example, .box {width: 350px; border: 10px solid black;} renders a box that is 370px wide.Here, the dimensions of the element are calculated as: width = width of the content, and height = height of the content. (Borders and padding are not included in the calculation.) -->

border-box
<!-- The width and height properties include the content, padding, and border, but do not include the margin. Note that padding and border will be inside of the box. For example, .box {width: 350px; border: 10px solid black;} renders a box that is 350px wide, with the area for content being 330px wide. The content box can't be negative and is floored to 0, making it impossible to use border-box to make the element disappear. -->

  .frame {
      width: 700px;
      height: 450px;
      border: 1px solid #000;
      background: #fff;
      margin: auto;
      padding: 15px 10px;
    }


      
   /*.firstright{

    position: relative;
    grid-column: 2 / 4; 
    
    
   


     img{
       
        position: absolute;
        width: 100%;
        top:3px;
        z-index: 1;
        
      
     }
     .mask{
       position:absolute;
       grid-column: 1 / 4; 
       z-index: 2;
       width:120%;
       top:0;
       right:0;
      
       
       right:0;
       user-select:none;
       mix-blend-mode:screen;
     } 
     
    }

     @keyframes zoom {
        0% { transform:scale(1,1); }
        50% { transform:scale(1.2,1.2); }
        100% {transform:scale(1,1);}
      }
}
*/


    .firstleft{
        grid-column: 1 / 2;
        margin-right: -2rem;
        z-index:10;
      
      
          
        img{
            width: 100%;
            bottom:0;
            
           
            /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);*/
            
        }
        
       
    }